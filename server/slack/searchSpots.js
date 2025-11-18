const fetch = require('node-fetch')
const { getFreshAccessToken } = require('../helpers/token-refresh')
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

const launchSearchSpots = async (triggerId, teamId) => {
  try {
    // Get fresh access token for the team
    const accessToken = await getFreshAccessToken(teamId)
    if (!accessToken) {
      console.error(
        'launchSearchSpots: Failed to get access token for team',
        teamId,
      )
      return { ok: false, error: 'token_refresh_failed' }
    }

    const requestData = {
      bearerToken: accessToken,
      ...dialog,
      trigger_id: triggerId,
    }

    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()

    if (!body.ok) {
      console.error('launchSearchSpots error:', body.error)
    }

    return body
  } catch (err) {
    console.error('launchSearchSpots ~ err:', err)
    return err
  }
}

module.exports = launchSearchSpots
