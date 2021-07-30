import { baseUri } from '../config'
import { SET_USERS_SPOTS } from '../constants/actionTypes'

export const fetchSpots = () => async (dispatch, getState) => {
  const { authData } = getState()
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        userData: authData,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log('GET SPOTS???')
    const response = await fetch(`${baseUri}/spots/get`, options)
    console.log('response: ', response)
    if (!response.ok) throw new Error('Failed initializeAuth')
    const body = await response.json()
    console.log('body: ', body)
    dispatch({ type: SET_USERS_SPOTS, value: body })
  } catch (err) {}
}

export const deleteSpots = (spots) => async (dispatch, getState) => {
  console.log('state: ', getState())
  const { authData, usersSpots } = getState()
  console.log('spots: ', spots)
  console.log('usersSpots: ', usersSpots)
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        userData: authData,
        spots,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(`${baseUri}/spots/delete`, options)
    console.log('response: ', response)
    if (!response.ok) throw new Error('Failed initializeAuth')
    const body = await response.json()
    console.log('body: ', body)
    const updatedList = usersSpots.filter((val) => !spots.includes(val.id))
    console.log('updatedList: ', updatedList)
    dispatch({ type: SET_USERS_SPOTS, value: updatedList })
    // TODO dispatch success toast!!
  } catch (err) {}
}
