import {
  ADD_USER,
  COMPANY_SIGNUP_INFO,
  SET_AUTH,
  SET_USERS_SPOTS,
  REQUEST_LOGOUT,
} from '../constants/actionTypes'

const INITIAL_STATE = {
  auth: false,
  authData: {},
  signup: {},
  logoutRequested: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        authData: action.value,
      })
    case COMPANY_SIGNUP_INFO:
      return Object.assign({}, state, {
        signup: action.value,
      })
    case SET_AUTH:
      return Object.assign({}, state, {
        auth: action.value,
        logoutRequested: false,
      })
    case SET_USERS_SPOTS:
      return Object.assign({}, state, {
        usersSpots: action.value,
      })
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {
        logoutRequested: true,
      })
    default:
      return { ...state }
  }
}
