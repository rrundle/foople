require('dotenv').config()

// dev
const baseUri =
  process.env.REACT_APP_ENV === 'dev'
    ? 'http://localhost:2999'
    : 'https://foople.herokuapp.com'

const cookieExpiration = 7

// TODO add { sameSite: 'lax' } as cookie option to prevent CSRF attacks

const config = new Map()

config.set('environment', process.env.REACT_APP_ENV)
config.set('stripeKey', process.env.REACT_APP_STRIPE_API_KEY)
config.set('stripeProductId', process.env.REACT_APP_STRIPE_PRODUCT_ID)
config.set('clientId', process.env.REACT_APP_CLIENT_ID)
config.set('refreshToken', process.env.SLACK_REFRESH_TOKEN)
config.set('oauthToken', process.env.SLACK_OAUTH_TOKEN)

export { baseUri, config, cookieExpiration }
