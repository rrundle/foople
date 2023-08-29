const cron = require('node-cron')
const FormData = require('form-data')
const { serverConfig } = require('../config')

require('dotenv').config()

/**
 * Refresh the access token every 11 hours
 */
cron.schedule('0 */11 * * *', async () => {
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

  const refreshResponse = await fetch(
    'https://slack.com/api/oauth.v2.access',
    requestOptions,
  )
  const refreshResult = refreshResponse.json()

  serverConfig.set('refreshToken', refreshResult.refresh_token)
  serverConfig.set('oauthToken', refreshResult.access_token)
})
