const fetch = require('node-fetch')
const { serverConfig } = require('../config')
const { options } = require('./helpers')
const { sendTwilioMessage } = require('../../server/cronjobs/token-rotation')

const dialog = {
  dialog: {
    callback_id: 'search_spot',
    title: 'Search for a food spot',
    submit_label: 'Find',
    elements: [
      {
        type: 'text',
        label: 'Restaurant Name',
        name: 'lunchSpot',
        placeholder: 'e.g. In-N-Out',
      },
      {
        type: 'text',
        label: 'Location',
        name: 'location',
        placeholder: 'e.g. Los Angeles, CA',
      },
    ],
  },
}

const launchSearchSpots = async (triggerId) => {
  try {
    await sendTwilioMessage(
      `about to launch dialog ~ oauthToken: ${serverConfig.get('oauthToken')}`,
    )
    const requestData = {
      bearerToken: serverConfig.get('oauthToken'),
      // token: serverConfig.get('oauthToken'),
      ...dialog,
      trigger_id: triggerId,
    }

    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()
    return body
  } catch (err) {
    console.error('launchSearchSpots ~ err:', err)
    return err
  }
}

module.exports = launchSearchSpots
