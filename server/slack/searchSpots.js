const fetch = require('node-fetch')
const { mongoClient } = require('../database')
const { options } = require('./helpers')

require('dotenv').config()

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
  const requestData = {
    bearerToken: process.env.SLACK_OAUTH_TOKEN,
    token: process.env.SLACK_OAUTH_TOKEN,
    ...dialog,
    trigger_id: triggerId,
  }
  try {
    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()
    return body
  } catch (err) {
    return err
  }
}

module.exports = launchSearchSpots
