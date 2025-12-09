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

const launchSearchSpots = async (triggerId, teamId, prefetchedToken = null) => {
  const startTime = Date.now()
  try {
    console.log(
      `[${teamId}] launchSearchSpots called, prefetchedToken: ${
        prefetchedToken ? 'PROVIDED' : 'NULL'
      }`,
    )

    // Use pre-fetched token if available (to avoid delay when trigger_id is about to expire)
    // trigger_id expires in 3 seconds, so we need to be fast!
    let accessToken = prefetchedToken
    if (!accessToken) {
      console.log(`[${teamId}] No prefetched token, fetching now...`)
      const tokenStartTime = Date.now()
      accessToken = await getFreshAccessToken(teamId)
      console.log(
        `[${teamId}] Token fetch took ${Date.now() - tokenStartTime}ms`,
      )
    }

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

    console.log(
      `[${teamId}] Calling dialog.open (elapsed: ${Date.now() - startTime}ms)`,
    )
    const response = await fetch(
      'https://slack.com/api/dialog.open',
      options({ data: requestData }),
    )
    const body = await response.json()

    console.log(
      `[${teamId}] dialog.open response (elapsed: ${
        Date.now() - startTime
      }ms):`,
      body.ok ? 'SUCCESS' : `ERROR: ${body.error}`,
    )

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
