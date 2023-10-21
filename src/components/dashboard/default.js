import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import DataTableComponent from '../tables/dataTableComponent'
import { fetchSpots, deleteSpots } from '../../actions/spots'

const Dashboard = ({ usersSpots, getSpots, removeSpots, auth, authData }) => {
  const [loading, setLoading] = useState(false)
  const [augmentedData, setAugmentedData] = useState([])

  useEffect(() => {
    if (auth && Object.keys(authData).length) {
      setLoading(true)
      getSpots()
    }
  }, [])

  useEffect(() => {
    if (usersSpots) {
      setLoading(true)
      const newData = augmentData(usersSpots)
      setAugmentedData(newData)
      setLoading(false)
    }
  }, [usersSpots])

  const augmentData = (usersSpots) => {
    const cleanedData = usersSpots.map((spot) => {
      const { url, name, id: spotId, addedBy } = spot
      return {
        id: spotId,
        restaurant: (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ),
        'Added By': addedBy,
        // 'Voted For': '',
      }
    })
    return cleanedData
  }

  const handleDelete = (spots) => {
    removeSpots(spots)
  }

  return (
    <DataTableComponent
      data={augmentedData}
      loading={loading}
      onDelete={handleDelete}
    />
  )
}

const mapStateToProps = ({ usersSpots, auth = false, authData = {} }) => ({
  usersSpots,
  auth,
  authData,
})

const mapDispatchToProps = (dispatch) => ({
  getSpots: () => dispatch(fetchSpots()),
  removeSpots: (value) => dispatch(deleteSpots(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
