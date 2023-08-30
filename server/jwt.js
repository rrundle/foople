const jwt = require('jsonwebtoken')
const { mongoClient } = require('./database')

const generateJWT = (userData) => {
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60)

  const {
    access_token: accessToken,
    user: {
      email,
      id: uid,
      name,
      image_72: avatarSmall,
      image_512: avatarLarge,
    } = {},
    stripeId = '',
    team: { id: teamId } = {},
    status,
    subscriptionId,
    trialPeriodStart,
  } = userData

  const payload = {
    accessToken,
    avatarLarge,
    avatarSmall,
    email,
    isAdmin: true,
    name,
    stripeId,
    teamId,
    status,
    subscriptionId,
    trialPeriodStart,
    uid,
  }

  return jwt.sign(payload, 'ThisIsMySecretKey!', {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  })
}

const refreshJwt = async (jwtStatus) => {
  // TODO we should be getting updated data from the database
  // instead of just refreshing the data from the cookie
  const today = new Date()
  const expirationDate = new Date(today)
  expirationDate.setDate(today.getDate() + 60)

  const { decoded: { teamId } = {} } = jwtStatus
  if (!teamId) return null
  const userCollection = await mongoClient(teamId, 'auth')
  const userData = await userCollection.find({}).toArray()
  if (!userData.length) return undefined
  const [
    {
      access_token: accessToken,
      stripeId,
      status,
      subscriptionId,
      trialPeriodStart,
    },
    {
      user: {
        id: uid,
        image_72: avatarSmall,
        image_512: avatarLarge,
        email,
        name,
      } = {},
    },
  ] = userData

  const payload = {
    accessToken,
    avatarLarge,
    avatarSmall,
    email,
    isAdmin: true,
    name,
    stripeId,
    teamId,
    status,
    subscriptionId,
    trialPeriodStart,
    uid,
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: parseInt(expirationDate.getTime() / 1000, 10),
  })
}

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return { valid: false, decoded: null }
    return { valid: true, decoded }
  })
}

module.exports = { generateJWT, refreshJwt, verifyJwt }
