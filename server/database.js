const MongoClient = require('mongodb').MongoClient
const { mongoUrl } = require('./config')

const mongoClient = (teamId, type = 'spots') => {
  return new Promise((resolve, reject) => {
    console.log('teamId in MongoClient', teamId)
    if (teamId) {
      MongoClient.connect(
        mongoUrl,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err, client) => {
          if (err) reject(err)
          const db = client.db(type)
          const collection = db.collection(teamId)
          resolve(collection)
        },
      )
    } else {
      reject('no teamId provided to db query')
    }
  })
}

module.exports = {
  mongoClient,
}
