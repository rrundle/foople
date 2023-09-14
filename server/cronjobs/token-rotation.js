const cron = require('node-cron')
const FormData = require('form-data')
const fetch = require('node-fetch')

const { serverConfig } = require('../config')

require('dotenv').config()

const startTokenRotation = async () => {
  setOauthToken()
  /**
   * Refresh the access token at 4am and 4pm
   */
  cron.schedule('0 4,16 * * *', async () => {
    setOauthToken()
  })
}

const setOauthToken = async () => {
  const formdata = new FormData()
  formdata.append('client_id', process.env.CLIENT_ID)
  formdata.append('client_secret', process.env.CLIENT_SECRET)
  formdata.append('refresh_token', serverConfig.get('refreshToken'))
  formdata.append('grant_type', 'refresh_token')

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  }

  try {
    const refreshResponse = await fetch(
      'https://slack.com/api/oauth.v2.access',
      requestOptions,
    )
    const refreshResult = await refreshResponse.json()

    serverConfig.set('refreshToken', refreshResult.refresh_token)
    serverConfig.set('oauthToken', refreshResult.access_token)
  } catch (e) {
    console.error('token rotation error:', e)
  }
}

module.exports = { startTokenRotation }
