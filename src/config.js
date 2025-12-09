require('dotenv').config()

// Determine base URI based on environment
const baseUri =
  process.env.REACT_APP_ENV === 'dev'
    ? 'http://localhost:2999'
    : process.env.REACT_APP_BASE_URI || 'https://foople.herokuapp.com'
console.log('🚀 ~ baseUri:', baseUri)

const cookieExpiration = 7

// TODO add { sameSite: 'lax' } as cookie option to prevent CSRF attacks

const config = new Map()

config.set('environment', process.env.REACT_APP_ENV)
config.set('stripeKey', process.env.REACT_APP_STRIPE_API_KEY)
config.set('stripeProductId', process.env.REACT_APP_STRIPE_PRODUCT_ID)
config.set('clientId', process.env.REACT_APP_CLIENT_ID)

export { baseUri, config, cookieExpiration }
