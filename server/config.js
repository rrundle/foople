require('dotenv').config()
// Connection URL - local
// const mongoUrl = 'mongodb://localhost:27017'

// Connection URL - production
const mongoUrl = `mongodb+srv://slotdp02:${process.env.MONGO_PASSWORD}@cluster0.p5pz6ok.mongodb.net/?retryWrites=true&w=majority`

const YELP_TOKEN = process.env.YELP_TOKEN

module.exports = {
  mongoUrl,
  YELP_TOKEN,
}
