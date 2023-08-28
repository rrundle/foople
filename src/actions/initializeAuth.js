import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { ADD_USER, SET_AUTH } from '../constants/actionTypes'
import { baseUri } from '../config'

const initializeAuth = (history, location) => async (dispatch, getState) => {
  const state = getState()
  if (state.auth) {
    return {
      authed: true,
      message: 'already authed',
    }
  }
  const authToken = Cookies.get('lunch-session')
  if (!authToken) return { authed: false, message: 'no token to auth with' }

  const options = {
    method: 'PUT',
    body: JSON.stringify({
      authToken,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const response = await fetch(`/check-auth`, options)
    if (!response.ok) {
      Cookies.remove('lunch-session')
      dispatch({ type: SET_AUTH, value: false })
      if (location.pathname === '/') {
        history.push('/')
      } else {
        history.push('/login')
      }
      throw new Error('Failed initializeAuth')
    }
    const body = await response.json()
    if (!body.authed) throw new Error('auth failed')
    const decodedJwt = jwtDecode(body.token)
    dispatch({ type: ADD_USER, value: { token: body.token, ...decodedJwt } })
    dispatch({ type: SET_AUTH, value: true })
  } catch (err) {
    console.error(err)
    return {
      authed: false,
      message: err,
    }
  }
}

export default initializeAuth
