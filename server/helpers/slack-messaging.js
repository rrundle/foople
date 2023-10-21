const fetch = require('node-fetch')

const sendMessageToChannel = async ({ accessToken, message, channelId }) => {
  const data = {
    channel: channelId,
    text: message,
  }

  const messageOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const response = await fetch(
    'https://slack.com/api/chat.postMessage',
    messageOptions,
  )
  const body = await response.json()
  return body
}

const sendEphemeralToChannel = async ({
  accessToken,
  message,
  channelId,
  user,
}) => {
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
      Authorization: `Bearer ${accessToken}`,
    },
  }
  const response = await fetch(
    'https://slack.com/api/chat.postEphemeral',
    messageOptions,
  )
  const body = await response.json()
  return body
}

module.exports = {
  sendMessageToChannel,
  sendEphemeralToChannel,
}
