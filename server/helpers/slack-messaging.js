const fetch = require('node-fetch')
const { getFreshAccessToken } = require('./token-refresh')

/**
 * Sends a message to a Slack channel
 * @param {Object} params
 * @param {string} params.accessToken - Access token (will be refreshed if expired)
 * @param {string} params.teamId - Team ID for token refresh (optional but recommended)
 * @param {string} params.message - Message text to send
 * @param {string} params.channelId - Channel ID to send message to
 */
const sendMessageToChannel = async ({
  accessToken,
  teamId,
  message,
  channelId,
}) => {
  // If teamId is provided, get a fresh token
  let token = accessToken
  if (teamId) {
    const freshToken = await getFreshAccessToken(teamId)
    if (freshToken) {
      token = freshToken
    }
  }

  const data = {
    channel: channelId,
    text: message,
  }

  const messageOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await fetch(
    'https://slack.com/api/chat.postMessage',
    messageOptions,
  )
  const body = await response.json()

  // Log if token was invalid
  if (!body.ok && body.error === 'token_revoked') {
    console.error('Token revoked for team:', teamId)
  }

  return body
}

/**
 * Sends an ephemeral message to a Slack user in a channel
 * @param {Object} params
 * @param {string} params.accessToken - Access token (will be refreshed if expired)
 * @param {string} params.teamId - Team ID for token refresh (optional but recommended)
 * @param {string} params.message - Message text to send
 * @param {string} params.channelId - Channel ID
 * @param {string} params.user - User ID to send ephemeral message to
 */
const sendEphemeralToChannel = async ({
  accessToken,
  teamId,
  message,
  channelId,
  user,
}) => {
  // If teamId is provided, get a fresh token
  let token = accessToken
  if (teamId) {
    const freshToken = await getFreshAccessToken(teamId)
    if (freshToken) {
      token = freshToken
    }
  }

  const data = {
    channel: channelId,
    text: message,
    user,
  }

  const messageOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await fetch(
    'https://slack.com/api/chat.postEphemeral',
    messageOptions,
  )
  const body = await response.json()

  // Log if token was invalid
  if (!body.ok && body.error === 'token_revoked') {
    console.error('Token revoked for team:', teamId)
  }

  return body
}

module.exports = {
  sendMessageToChannel,
  sendEphemeralToChannel,
}
