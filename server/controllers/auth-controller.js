const qs = require('qs')
const fetch = require('node-fetch')
const schedule = require('node-schedule')
const moment = require('moment')
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY)
const { AccountStatus } = require('../constants')
const { generateJWT } = require('../jwt')
const { mongoClient } = require('../database')
const { refreshJwt, verifyJwt } = require('../jwt')
const { sendMessageToChannel } = require('../helpers/slack-messaging')
const { sendWelcome } = require('./welcome-controller')

const isPaymentEnabled = process.env.PAYMENT_FEATURE_ENABLED

const checkAuth = async (req, res) => {
  const body = req.body
  const { authToken } = body
  const jwtStatus = verifyJwt(authToken)
  if (!jwtStatus.valid) {
    return res.status('401').send({
      authed: false,
      message: 'invalid jwt',
    })
  }
  const refreshedJwt = await refreshJwt(jwtStatus)
  if (refreshedJwt) {
    res.status('200').send({
      authed: true,
      token: refreshedJwt,
    })
  } else {
    res.status('401').send({
      authed: false,
      message: "couldn't refresh jwt",
    })
  }
}

const oauth = async (req, res) => {
  const { code, state } = req.body
  // For some reason I get an error with v2 on users.idenity (login) calls
  // and an error if I don't use v2 with the signup call
  // TODO check on API updates in case this might break, but should be stable
  // if we don't update the version
  const uri = state.includes('login')
    ? 'https://slack.com/api/oauth.access'
    : 'https://slack.com/api/oauth.v2.access'

  const body = qs.stringify({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  })

  const options = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }

  try {
    const request = await fetch(uri, options)
    const response = await request.json()
    if (!response.ok) throw new Error(response.error)
    // insert the new client into the database
    const {
      team: { id: teamId } = {},
      user: { email: userEmail = '', id: userSlackId = '' } = {},
    } = response

    if (!teamId) throw new Error('no team Id')
    const authCollection = await mongoClient(teamId, 'auth')
    const [company, adminUser] = await authCollection.find({}).toArray()

    if (state === 'login' && !company) {
      // no user, we need user permissions
      return res.status('200').send({
        message: 'signup needed',
      })
    }

    if (state === 'login.signup' && !adminUser) {
      // New Admin User
      try {
        // company added but not the user
        await createAdmin(response, authCollection)
        const authedUser = await createToken(company)
        return res.status('200').send({
          message: 'added admin user, full auth',
          token: authedUser,
        })
      } catch (err) {
        return res.status('400').send({
          message: 'error in creating admin user',
        })
      }
    }

    if ((company || {})._id) {
      // Company already exists
      const authedUser = await createToken(adminUser || company)
      return res.status('200').send({
        message: !adminUser ? 'existing user' : 'authed existing user',
        token: authedUser,
      })
    }

    // state === 'signup', new customer, insert
    const newUser = await createCompany({
      data: response,
      userEmail,
      userSlackId,
      teamId,
      authCollection,
    })

    const {
      team: { id: team_id },
      incoming_webhook: { channel_id },
    } = newUser

    await sendWelcome(team_id, channel_id)

    // Auth user
    const authedUser = await createToken(newUser)

    return res.status('200').send({
      message: 'existing user',
      token: authedUser,
    })
  } catch (err) {
    return res.status('400').send({
      message: err,
    })
  }
}

const createAdmin = async (userData, authCollection) => {
  try {
    await authCollection.insertOne({
      ...userData,
    })
    return userData
  } catch (err) {
    console.error('err in creating admin user: ', err)
  }
}

const createCompany = async ({
  data,
  userEmail,
  userSlackId,
  teamId,
  authCollection,
}) => {
  stripe.setApiKey(process.env.REACT_APP_STRIPE_SECRET_KEY)
  const stripCustomer = isPaymentEnabled
    ? await stripe.customers.create({
        email: userEmail,
        description: `slack UserId: ${userSlackId}`,
      })
    : null

  const trialPeriodStart = moment()

  const authData = {
    ...data,
    name: 'admin',
    stripeId: isPaymentEnabled ? stripCustomer.id : null,
    status: AccountStatus.Trial,
    trialPeriodStart: trialPeriodStart.toDate(),
  }

  // new client, insert
  await authCollection.insertOne({
    ...authData,
  })

  if (isPaymentEnabled) {
    const in4Days = trialPeriodStart.add(4, 'd').toDate()
    const fourthDayReminder = async (teamId) => {
      sendSignupReminder(teamId, 3)
    }
    schedule.scheduleJob(in4Days, fourthDayReminder.bind(null, teamId))

    const in6Days = trialPeriodStart.add(6, 'd').toDate()
    const sixthDayReminder = async (teamId) => {
      sendSignupReminder(teamId, 1)
    }
    schedule.scheduleJob(in6Days, sixthDayReminder.bind(null, teamId))

    const in7Days = trialPeriodStart.add(7, 'd').toDate()
    const seventhDayReminder = async (teamId) => {
      sendSignupReminder(teamId, 0)
    }
    schedule.scheduleJob(in7Days, seventhDayReminder.bind(null, teamId))

    const in8Days = trialPeriodStart.add(8, 'd').toDate()
    const expiredReminder = async (teamId) => {
      const authCollection = await mongoClient(teamId, 'auth')
      const [company] = await authCollection.find({}).toArray()
      if (
        company.status !== AccountStatus.Active &&
        company.status !== AccountStatus.Canceled
      ) {
        // trial expired set account to expired
        // TODO: Track how many acounts are expiring, this will tell us a lot about conversions
        authCollection.updateOne(
          {},
          { $set: { status: AccountStatus.TrialExpired } },
        )
      }
    }
    schedule.scheduleJob(in8Days, expiredReminder.bind(null, teamId))
  }

  return authData
}

const sendSignupReminder = async (teamId, timeLeft) => {
  const authCollection = await mongoClient(teamId, 'auth')
  const [company, user] = await authCollection.find({}).toArray()
  switch (company.status) {
    case AccountStatus.Trial:
      // You only have {timeLeft} days left!
      const messageText = timeLeft
        ? `:wave: Just a reminder that you only have ${timeLeft} days left in your Foople trial.`
        : `:wave: Your Foople trial is expiring today! Click here to keep it going for your team <https://foople.club/join> `

      const message = await sendMessageToChannel({
        accessToken: company.access_token,
        message: messageText,
        channelId: user.user.id,
      })
      break
    case AccountStatus.TrialExpired:
      // send email reminder to sign up, theres still time!
      break
    case AccountStatus.Canceled:
      // send email anyway we can win you back?
      break
    default:
      // no email because we should send thank you when they pay.
      break
  }
}

const createToken = async (data) => {
  const authedUser = await generateJWT({
    ...data,
  })
  return authedUser
}

module.exports = {
  checkAuth,
  oauth,
  createCompany,
  createToken,
}
