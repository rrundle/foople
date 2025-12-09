const fetch = require('node-fetch')

const { mongoClient } = require('../database')
const { AccountStatus } = require('../constants')
const { triggerSlackPoll } = require('../slack/helpers')
const launchSearchSpots = require('../slack/searchSpots')
const searchYelp = require('../slack/searchYelp')
const votingBlock = require('../slack/votingBlock')
const buildInteractiveMessage = require('../slack/buildInteractiveMessage')
const buildHelpBlock = require('../slack/buildHelpBlock')
const { sendEphemeralToChannel } = require('../helpers/slack-messaging')
const { getFreshAccessToken } = require('../helpers/token-refresh')

const slackLunchCommand = async (req, res) => {
  const startTime = Date.now()
  const {
    channel_id: channelId,
    response_url: webhookUrl,
    team_id: teamId,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body

  console.log(`[${teamId}] /foople command received, text="${text}"`)

  // CRITICAL: Respond to Slack immediately (within 3 seconds)
  res.status(200).send()
  console.log(`[${teamId}] Response sent in ${Date.now() - startTime}ms`)

  // For dialog/modal interactions, use trigger_id IMMEDIATELY before it expires
  // MongoDB queries are taking 3.5+ seconds - too slow for 3-second trigger_id limit!
  if (text === 'add') {
    console.log(`[${teamId}] Fast-path: launching dialog with minimal delay`)
    // Get token and launch dialog in background - don't await DB queries
    ;(async () => {
      try {
        const dialogStart = Date.now()
        // Get token without checking status (status check requires slow DB query)
        const freshAccessToken = await getFreshAccessToken(teamId)
        console.log(
          `[${teamId}] Token for dialog fetched in ${
            Date.now() - dialogStart
          }ms`,
        )

        await launchSearchSpots(triggerId, teamId, freshAccessToken)
        console.log(
          `[${teamId}] Dialog launched in ${Date.now() - dialogStart}ms total`,
        )
      } catch (err) {
        console.error(`[${teamId}] Error in fast-path dialog:`, err)
      }
    })()
    return // Exit immediately, background task continues
  }

  // For non-dialog commands, we can do normal async processing
  const tokenStartTime = Date.now()
  const freshAccessToken = await getFreshAccessToken(teamId)
  console.log(
    `[${teamId}] Token fetched in ${Date.now() - tokenStartTime}ms (total: ${
      Date.now() - startTime
    }ms)`,
  )

  const dbStartTime = Date.now()
  const authCollection = await mongoClient(teamId, 'auth')
  const [company, { user }] = await authCollection.find({}).toArray()
  console.log(
    `[${teamId}] DB query in ${Date.now() - dbStartTime}ms (total: ${
      Date.now() - startTime
    }ms)`,
  )

  if (company.status === AccountStatus.TrialExpired) {
    let message =
      ':cry: Your free trial has expired. Please contact your channel admin to get things running again.'
    if (userId === user.user_id) {
      message =
        ':exclamation: Your free trial has expired. No problem, go to https://foople.com/app/account/payment to keep things going'
    }
    return sendEphemeralToChannel({
      accessToken: freshAccessToken || company.access_token,
      teamId,
      message,
      channelId,
      user: user.user_id,
    })
  }

  if (company.status === AccountStatus.Canceled) {
    return sendEphemeralToChannel({
      accessToken: freshAccessToken || company.access_token,
      teamId,
      message:
        ':no_entry_sign: Sorry but your account was canceled. Please contact your channel admin to get things running again.',
      channelId,
      user: user.user_id,
    })
  }

  if (text === 'help') {
    return buildHelpBlock(req.body)
  }

  const lunchData = await triggerSlackPoll(teamId, text)
  let data = {
    bearerToken: process.env.SLACK_TOKEN,
    callback_id: 'poll_creator',
    channel: channelId,
    response_type: 'in_channel',
    token,
    trigger_id: triggerId,
    user: userId,
  }

  if (!Object.keys(lunchData).length) {
    data.text =
      ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/foople add"'
  } else {
    data.text = 'Thanks!'
    data.blocks = await votingBlock({ lunchData, user: null, vote: null })
  }
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (err) {
    console.error('error from creating poll: ', err)
  }
}

const slackInteractiveCommand = async (req, res) => {
  if (req.body.payload) {
    const request = JSON.parse(req.body.payload)
    const { callback_id, type } = request

    if (type === 'dialog_submission') {
      if (callback_id === 'search_spot') {
        res.status(204).json({
          body: '',
          isBase64Encoded: true,
        })
        try {
          const { submission: { lunchSpot, location } = {} } = request
          const yelpResults = await searchYelp(lunchSpot, location)
          const {
            results: { businesses },
          } = yelpResults
          await buildInteractiveMessage(businesses, request)
        } catch (err) {
          console.error('uh oh problem with yelp search: ', err)
        }
      }
    }
    if (type === 'block_actions') {
      res.sendStatus(200)
      const [submission] = request.actions
      const {
        team: { id: teamId } = {},
        user: { name: userName },
      } = request
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        const spotsCollection = await mongoClient(teamId, 'spots')
        // Needed to check if spot already exists!! Bug Ticket
        const matches = await spotsCollection.find({}).toArray()

        const alreadyAdded = matches.some((spot) => spot.id === selectedSpot.id)

        if (!alreadyAdded) {
          // insert in the database if it doesn't already exist
          await spotsCollection.updateOne(
            selectedSpot,
            { $set: { addedBy: userName } },
            { upsert: true },
          )
        }
        // send back message saying successful, failure, or already added
        const interactiveOptions = {
          method: 'POST',
          body: JSON.stringify({
            channel: request.channel.id,
            token: request.token,
            user: request.user.id,
            type: 'section',
            text: !alreadyAdded
              ? `:tada: ${selectedSpot.name} has been added to the list!`
              : ':dancer: Great minds think alike! This spot has already been added. Try another place.',
          }),
          headers: {
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
        try {
          await fetch(request.response_url, interactiveOptions)
        } catch (err) {
          console.error('err: ', err)
        }
      } else {
        // its a vote or new poll request
        const { value: voteValue } = submission
        const vote = voteValue === 'newPoll' ? 'newPoll' : JSON.parse(voteValue)

        try {
          let data = {
            bearerToken: process.env.SLACK_TOKEN,
            callback_id: 'poll_creator',
            channel: request.channel.id,
            replace_original: true,
            token: request.token,
            trigger_id: request.trigger_id,
          }

          data.blocks = await votingBlock({
            lunchData: request,
            user: req.body,
            vote,
          })

          await fetch(request.response_url, {
            method: 'POST',
            body: JSON.stringify(data),
          })
        } catch (err) {
          console.error('err: ', err)
        }
      }
    }
  }
}

const handleMention = async (req, res) => {
  const { challenge } = req.body
  res.status(200).json({
    challenge,
  })
}

module.exports = {
  handleMention,
  slackLunchCommand,
  slackInteractiveCommand,
}
