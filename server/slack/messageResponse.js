const fetch = require('node-fetch')

const messageResponse = ({ text, uri, teamId, token, userId, channel }) => {
  return new Promise(async (resolve, reject) => {
    const message = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text,
          },
        },
      ],
    }

    const options = {
      method: 'POST',
      body: JSON.stringify({
        channel: channel,
        token: token,
        user: userId,
        ...message,
      }),
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(uri, options)
      const body = await response.json()
      resolve(body)
    } catch (err) {
      console.error('err ', err)
      reject(err)
    }
  })
}

module.exports = messageResponse
