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
    const response = await fetch(`${baseUri}/spots/get`, options)
    if (!response.ok) throw new Error('Failed initializeAuth')
    const body = await response.json()
    dispatch({ type: SET_USERS_SPOTS, value: body })
  } catch (err) {}
}

export const deleteSpots = (spots) => async (dispatch, getState) => {
  const { authData, usersSpots } = getState()
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
    if (!response.ok) throw new Error('Failed initializeAuth')
    await response.json()
    const updatedList = usersSpots.filter((val) => !spots.includes(val.id))
    dispatch({ type: SET_USERS_SPOTS, value: updatedList })
    // TODO dispatch success toast!!
  } catch (err) {}
}
