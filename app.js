const express = require('express')
const path = require('path')
const cors = require('cors')
const favicon = require('express-favicon')
const bodyParser = require('body-parser')

const schedule = require('node-schedule')
const moment = require('moment')

const { mongoClient } = require('./server/database')
const {
  slackLunchCommand,
  slackInteractiveCommand,
  handleMention,
} = require('./server/controllers/slack-controller')
const {
  getCompany,
  getUserSpots,
  deleteUserSpots,
} = require('./server/controllers/web-controller')
const {
  checkAuth,
  oauth,
  welcome,
} = require('./server/controllers/auth-controller')
const {
  createSubscription,
  updateSubscription,
  getPaymentMethods,
} = require('./server/controllers/payment-controller')

require('dotenv').config()

const app = express()
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 2999

app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsonParser)
app.use(cors())
app.use(favicon(__dirname + '/build/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

/* TODO Uncomment when ready to run build version with app on same baseUri */
// Production dev
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

/* ROUTES */

/* HANDLE SLASH COMMANDS */
app.post('/lunch', slackLunchCommand)

/* HANDLE THE INTERACTIVE COMPONENTS */
app.post('/lunch/interactive', slackInteractiveCommand)

/* Oauth endpoint for new users */
app.post('/oauth', oauth)

/* Check user's auth status and refresh if valid jwt */
app.put('/check-auth', checkAuth)

/* Get company that was added on signup */
app.post('/company/get', getCompany)

/* Get user's spots for listing in admin */
app.post('/spots/get', getUserSpots)

/* Get user's spots for listing in admin */
app.post('/spots/delete', deleteUserSpots)

/* Send welcome message when user isntalls the app */
app.put('/welcome', welcome)

/* slack calls this api when someone @mentions the app */
app.post('/slack-mention', handleMention)

/* Create subscription for paying client */
app.post('/payment/create-subscription', createSubscription)

/* Update subscription for paying client */
app.post('/payment/update-subscription', updateSubscription)

/* Get payment methods for customer */
app.get('/payment/get-payments', getPaymentMethods)

/* CLEAR THE DATABASE */
// WARNING proceed with caution
// TODO Remove this when launching app
app.post('/clear', async (req, res) => {
  console.log('hello from clear: ', req.body)
  console.log('process.env.MONGO_PASSWORD: ', process.env.MONGO_PASSWORD)
  const { teamId, password } = req.body
  if (password !== process.env.MONGO_PASSWORD) {
    res.sendStatus(404)
  } else {
    const spotsCollection = await mongoClient(teamId, 'spots')
    const spots = await spotsCollection.deleteMany({})
    const userCollection = await mongoClient(teamId, 'auth')
    const user = await userCollection.deleteMany({})
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    })
    res.status('200').send({ user, spots })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
