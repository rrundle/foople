const fetch = require('node-fetch')
const { mongoClient } = require('../database')

const buildHelpBlock = (body) => {
  return new Promise(async (resolve, reject) => {
    console.log(
      '🚀 ~ file: buildHelpBlock.js ~ line 5 ~ buildHelpBlock ~ body',
      body.team_id,
    )
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
            text: '_*/lunch*_  Creates a random poll of lunches to be voted on',
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text:
              '_*/lunch <type>*_  Creates a random poll with that type of food as a priority',
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: 'i.e. _*/lunch noodles*_',
            },
          ],
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text:
              '_*/lunch add*_  Launches a dialog to search for and a new lunch spot to the list of options',
          },
        },
      ],
    }

    const collection = await mongoClient(body.team_id, 'auth')
    const user = await collection.findOne()

    const options = {
      method: 'POST',
      body: JSON.stringify({
        channel: user.incoming_webhook.channel_id,
        token: body.token,
        user: body.user_id,
        ...message,
      }),
      headers: {
        Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await fetch(user.incoming_webhook.url, options)
      resolve(response)
    } catch (err) {
      console.error('err ', err)
      reject(err)
    }
  })
}

module.exports = buildHelpBlock
