require('dotenv').config()
// Connection URL - local
// const mongoUrl = 'mongodb://localhost:27017'

// Connection URL - production
const mongoUrl = `mongodb+srv://slotdp02:${process.env.MONGO_PASSWORD}@cluster1.yow9df7.mongodb.net/?appName=Cluster1&retryWrites=true&w=majority`
console.log('🚀 ~ mongoUrl:', mongoUrl)

const YELP_TOKEN = process.env.YELP_TOKEN

const serverConfig = new Map()

serverConfig.set('refreshToken', process.env.SLACK_REFRESH_TOKEN)
serverConfig.set('oauthToken', process.env.SLACK_OAUTH_TOKEN)

module.exports = {
  mongoUrl,
  YELP_TOKEN,
  serverConfig,
}
