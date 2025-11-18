const fetch = require('node-fetch')
const { mongoClient } = require('../database')
const { getFreshAccessToken } = require('../helpers/token-refresh')

const welcome = async (req, res) => {
  const {
    body: {
      companyInfo: {
        authed_user: { access_token: userToken } = {},
        incoming_webhook: { channel_id: channelId } = {},
        bot_user_id: botUser,
        team_id: teamId,
      },
      welcome,
    },
  } = req

  try {
    // Get fresh token for the team (for new installs, use the provided token)
    const freshToken = await getFreshAccessToken(teamId)
    const tokenToUse = freshToken || userToken

    const inviteOptions = {
      method: 'POST',
      body: JSON.stringify({
        channel: channelId,
        users: botUser,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenToUse}`,
      },
    }
    const response = await fetch(
      'https://slack.com/api/conversations.invite',
      inviteOptions,
    )
    const inviteResponse = await response.json()
    if (!inviteResponse.ok && inviteResponse.error !== 'already_in_channel') {
      throw new Error('Could not invite bot to the channel')
    }

    if (welcome) {
      const messageResponse = await sendWelcome(teamId, channelId)
      if (!messageResponse.ok) {
        throw new Error('could not send welcome message to the team')
      } else res.sendStatus(200)
    } else {
      res.sendStatus(200)
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
}

const sendWelcome = async (teamId, channelId) => {
  // Get fresh access token for the team
  const botToken = await getFreshAccessToken(teamId)

  if (!botToken) {
    console.error('sendWelcome: Failed to get access token for team', teamId)
    return { ok: false, error: 'token_refresh_failed' }
  }

  const messageData = {
    channel: channelId,
    text:
      'Great news! Foople has been added to your slack workspace!\nFoople lets you create polls to decide where to eat from a list of your favorite places.\nUse `/foople help` for a list of commands',
  }

  const messageOptions = {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${botToken}`,
    },
    json: true,
  }

  try {
    const request = await fetch(
      'https://slack.com/api/chat.postMessage',
      messageOptions,
    )
    const messageResponse = await request.json()
    return messageResponse
  } catch (err) {
    console.error('sendWelcome error:', err)
    return { ok: false }
  }
}

module.exports = {
  welcome,
  sendWelcome,
}
