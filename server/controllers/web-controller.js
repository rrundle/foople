const jwtDecode = require('jwt-decode')

const { mongoClient } = require('../database')

const getCompany = async (req, res) => {
  const { code = '' } = req.body
  const decodedJwt = jwtDecode(code)
  const { teamId = '' } = decodedJwt
  const userCollection = await mongoClient(teamId, 'auth')
  userCollection.find({}).toArray((err, result) => {
    if (err) {
      res.status(400).send({
        message: 'Could not get company info',
      })
    } else {
      const companyInfo = { ...result[0], ...result[1] }
      res.status(200).send(companyInfo)
    }
  })
}

const getUserSpots = async (req, res) => {
  const { userData: { teamId = '' } = {} } = req.body
  if (!teamId) {
    res.status(400).send({
      message: 'no auth to get spots',
    })
  }
  const spotsCollection = await mongoClient(teamId, 'spots')
  spotsCollection.find({}).toArray((err, result) => {
    const onlySpots = result.filter((entry) => entry.alias)
    res.status(200).send(onlySpots)
  })
}

const deleteUserSpots = async (req, res) => {
  const { userData: { teamId = '' } = {}, spots = [] } = req.body
  try {
    const spotsCollection = await mongoClient(teamId, 'spots')
    const deletedSpots = []
    for (const spot of spots) {
      const result = await spotsCollection.deleteOne({ id: spot })
      deletedSpots.push(result)
    }
    res.status(200).send(deletedSpots)
  } catch (err) {
    console.error('err: ', err)
  }
}

module.exports = {
  getCompany,
  getUserSpots,
  deleteUserSpots,
}
