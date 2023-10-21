const cron = require('node-cron')
const FormData = require('form-data')
const fetch = require('node-fetch')

const { serverConfig } = require('../config')

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

// const client = require('twilio')(accountSid, authToken);

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
    await sendTwilioMessage(
      `Starting rotation, refresh_token now: ${serverConfig.get(
        'refreshToken',
      )}`,
    )
    const refreshResponse = await fetch(
      'https://slack.com/api/oauth.v2.access',
      requestOptions,
    )
    const refreshResult = await refreshResponse.json()
    console.log('file: token-rotation.js:44 ~ refreshResult:', refreshResult)

    serverConfig.set('refreshToken', refreshResult.refresh_token)
    serverConfig.set('oauthToken', refreshResult.access_token)

    await sendTwilioMessage(
      `Completed rotation, refresh_token now: ${refreshResult.refresh_token}, oauth_token now: ${refreshResult.oauth_token}`,
    )
  } catch (e) {
    console.error('token rotation error:', e)
  }
}

const sendTwilioMessage = async (message = 'hello world') => {
  // try {
  //   const response = await client.messages
  //   .create({
  //     body: message,
  //     to: '+16268402294', // Text your number
  //     from: '+12345678901', // From a valid Twilio number
  //   })
  //   console.log('Twilio response', response.status);
  //   return response.status
  // } catch (e) {
  //   console.log('Twilio no likey');
  //   return 'Twilio no likey'
  // }
}

module.exports = { startTokenRotation, sendTwilioMessage }
