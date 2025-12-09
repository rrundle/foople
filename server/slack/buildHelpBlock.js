const fetch = require('node-fetch')
const { mongoClient } = require('../database')
const { getFreshAccessToken } = require('../helpers/token-refresh')

const buildHelpBlock = (body) => {
  return new Promise(async (resolve, reject) => {
    const message = {
      blocks: [
        {
          type: 'section',
          text: {
            type: 'plain_text',
            text: 'Here are some helpful commands:',
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text:
              '_*/foople*_  Creates a random poll of lunches to be voted on',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text:
              '_*/foople <type>*_  Creates a random poll with that type of food as a priority',
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: 'i.e. _*/foople noodles*_',
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text:
              '_*/foople add*_  Launches a dialog to search for and a new lunch spot to the list of options',
          },
        },
      ],
    }

    try {
      const collection = await mongoClient(body.team_id, 'auth')
      const user = await collection.findOne()

      // Get fresh access token for the team
      const accessToken = await getFreshAccessToken(body.team_id)
      if (!accessToken) {
        console.error(
          'buildHelpBlock: Failed to get access token for team',
          body.team_id,
        )
        return reject(new Error('token_refresh_failed'))
      }

      const options = {
        method: 'POST',
        body: JSON.stringify({
          channel: user.incoming_webhook.channel_id,
          token: body.token,
          user: body.user_id,
          ...message,
        }),
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }

      const response = await fetch(user.incoming_webhook.url, options)
      resolve(response)
    } catch (err) {
      console.error('buildHelpBlock error:', err)
      reject(err)
    }
  })
}

module.exports = buildHelpBlock
