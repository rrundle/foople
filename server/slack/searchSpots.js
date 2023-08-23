const fetch = require('node-fetch')
const { mongoClient } = require('../database')
const { options } = require('./helpers')
console.log('file: searchSpots.js:3 ~ options:', options)

require('dotenv').config()

const dialog = {
  dialog: {
    callback_id: 'search_spot',
    title: 'Search for a lunch spot',
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

const launchSearchSpots = async ({ teamId, triggerId, token }) => {
  const userCollection = await mongoClient(teamId, 'auth')
  const data = await userCollection.findOne()
  const requestData = {
    bearerToken: data.access_token,
    ...dialog,
    token: token,
    trigger_id: triggerId,
  }
  try {
    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()
    console.log('file: searchSpots.js:44 ~ body:', body)
    return body
  } catch (err) {
    return err
  }
}

module.exports = launchSearchSpots
