const fetch = require('node-fetch')
const tiny = require('turl')
const { getFreshAccessToken } = require('../helpers/token-refresh')

const createMessage = async (sectionData) => {
  const messageArray = [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'Which spot would you like to add?',
      },
    },
    {
      type: 'divider',
    },
  ]
  const loopLength = sectionData.length < 5 ? sectionData.length : 5
  for (let i = 0; i < loopLength; i++) {
    const {
      location: { address1, city, state, zip_code },
      name,
      url,
    } = sectionData[i]
    const tinyUrl = await tiny.shorten(url)
    messageArray.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `${name}, ${address1}, ${city}, ${state} ${zip_code} - ${tinyUrl}`,
      },
      accessory: {
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Choose',
        },
        value: JSON.stringify(sectionData[i]),
      },
    })
    if (i !== loopLength - 1) {
      messageArray.push({
        type: 'divider',
      })
    }
  }
  return messageArray
}

const interactiveMessageData = async (lunchData, request) => {
  const data = await createMessage(lunchData)
  return {
    channel: request.channel.id,
    blocks: data,
  }
}

const buildInteractiveMessage = (body, request) => {
  return new Promise(async (resolve, reject) => {
    try {
      const message = await interactiveMessageData(body, request)

      // Get fresh access token for the team
      const teamId = request.team?.id
      const accessToken = teamId ? await getFreshAccessToken(teamId) : null

      const options = {
        method: 'POST',
        body: JSON.stringify({
          channel: request.channel.id,
          token: request.token,
          user: request.user.id,
          ...message,
        }),
        headers: {
          Authorization: accessToken
            ? `Bearer ${accessToken}`
            : `Bearer ${process.env.SLACK_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }

      const response = await fetch(request.response_url, options)
      const body = await response.json()
      resolve(body)
    } catch (err) {
      console.error('buildInteractiveMessage error:', err)
      reject(err)
    }
  })
}

module.exports = buildInteractiveMessage
