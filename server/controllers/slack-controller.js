const fetch = require('node-fetch')

const { options, triggerSlackPoll } = require('../slack/helpers')
const { mongoClient } = require('../database')
const { AccountStatus } = require('../constants')
const launchSearchSpots = require('../slack/searchSpots')
const searchYelp = require('../slack/searchYelp')
const votingBlock = require('../slack/votingBlock')
const buildInteractiveMessage = require('../slack/buildInteractiveMessage')
const buildHelpBlock = require('../slack/buildHelpBlock')
const messageResponse = require('../slack/messageResponse')
const { sendEphemeralToChannel } = require('../helpers/slack-messaging')

const slackLunchCommand = async (req, res) => {
  console.log('req.body: ', req.body)
  const {
    channel_id: channelId,
    response_url: webhookUrl,
    team_id: teamId,
    text = '',
    token,
    trigger_id: triggerId,
    user_id: userId,
  } = req.body

  const responseText = text === 'help' ? 'Help is on the way!' : 'One sec...'
  console.log('file: slack-controller.js:26 ~ responseText:', responseText)

  res.status(200).json({
    response_type: 'ephemeral',
    text: responseText,
  })

  console.log("we're beyond the ephemeral response")

  const authCollection = await mongoClient(teamId, 'auth')
  const [company, { user }] = await authCollection.find({}).toArray()

  if (company.status === AccountStatus.TrialExpired) {
    let message =
      ':cry: Your free trial has expired. Please contact your channel admin to get things running again.'
    if (userId === user.user_id) {
      message =
        ':exclamation: Your free trial has expired. No problem, go to https://foople.com/app/account/payment to keep things going'
    }
    return sendEphemeralToChannel({
      accessToken: company.access_token,
      message,
      channelId,
      user: user.user_id,
    })
  }

  if (company.status === AccountStatus.Canceled) {
    return sendEphemeralToChannel({
      accessToken: company.access_token,
      message:
        ':no_entry_sign: Sorry but your account was canceled. Please contact your channel admin to get things running again.',
      channelId,
      user: user.user_id,
    })
  }

  if (text === 'add') {
    return launchSearchSpots({ teamId, triggerId, token })
  }

  if (text === 'help') {
    return buildHelpBlock(req.body)
  }

  const lunchData = await triggerSlackPoll(teamId, text)
  console.log('file: slack-controller.js:72 ~ lunchData:', lunchData)
  let data = {
    bearerToken: process.env.SLACK_TOKEN,
    callback_id: 'poll_creator',
    channel: channelId,
    response_type: 'in_channel',
    token,
    trigger_id: triggerId,
    user: userId,
  }
  console.log('file: slack-controller.js:83 ~ data:', data)

  if (!Object.keys(lunchData).length) {
    data.text =
      ':exclamation: You don\'t have enough lunch spots saved to create a poll. You can do so by typing "/foople add"'
  } else {
    data.text = 'Thanks!'
    data.blocks = await votingBlock({ lunchData, user: null, vote: null })
  }
  try {
    const response = await fetch(
      webhookUrl,
      options({ body: JSON.stringify(data) }),
    )
    console.log('file: slack-controller.js:94 ~ response:', response)
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
      const { team: { id: teamId } = {} } = request
      // check if its a spot addition request
      if (submission.text.text === 'Choose') {
        // spot addition request
        const selectedSpot = JSON.parse(submission.value)
        const spotsCollection = await mongoClient(teamId, 'spots')
        // check account status
        const matches = await spotsCollection.find({}).toArray()
        // insert in the database if it doesn't already exist
        const data = await spotsCollection.updateOne(
          selectedSpot,
          { $set: selectedSpot },
          { upsert: true },
        )
        // send back message saying successful, failure, or already added
        const options = {
          method: 'POST',
          body: JSON.stringify({
            channel: request.channel.id,
            token: request.token,
            user: request.user.id,
            type: 'section',
            text: data.upsertedCount
              ? `:tada: ${selectedSpot.name} has been added to the list!`
              : ':dancer: Great minds think alike! This spot has already been added. Try another place.',
          }),
          headers: {
            Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
        try {
          await fetch(request.response_url, options)
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

          await fetch(
            request.response_url,
            options({ body: JSON.stringify(data) }),
          )
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
