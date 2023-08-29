const fetch = require('node-fetch')
const { serverConfig } = require('../config')
const { options } = require('./helpers')

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
    const requestData = {
      bearerToken: serverConfig.get('oauthToken'),
      token: serverConfig.get('oauthToken'),
      ...dialog,
      trigger_id: triggerId,
    }
    console.log('file: searchSpots.js:35 ~ requestData:', requestData)

    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()
    console.log('file: searchSpots.js:42 ~ body:', body)
    return body
  } catch (err) {
    return err
  }
}

module.exports = launchSearchSpots
