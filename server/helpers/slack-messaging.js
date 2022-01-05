const fetch = require('node-fetch')

const sendMessageToChannel = async ({ accessToken, message, channelId }) => {
  console.log('accessToken', accessToken)
  console.log('message', message)
  console.log('channelId', channelId)

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

const sendEphemralToChannel = async ({
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
  console.log('data in ephemeral', data)

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
  sendEphemralToChannel,
}
