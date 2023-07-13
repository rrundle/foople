import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import App from './components/app'
import initializeAuth from './actions/initializeAuth'
import { cookieExpiration } from './config'
import { baseUrl } from './Router'

// Import custom Components
import Dashboard from './components/dashboard'
import BillingPage from './components/payment/BillingPage'
import Pricing from './components/price/pricing'
import SvgSpinner from './components/svg-spinner'
import DataTableComponent from './components/tables/dataTableComponent'
import UserEdit from './components/userEdit'
import SignupRoutes from './SignupRoutes'
import Signin from './auth/signin'
import Welcome from './auth/welcome'
import HomePage from './homepage/HomePage'

import { SET_AUTH } from './constants/actionTypes'

const AccountRoutes = ({
  history,
  setAuth,
  auth,
  authData,
  initializeAuth,
  logoutRequested,
}) => {
  const location = useLocation()
  const [loggedIn, setLoggedInState] = useState(false) // TODO CHANGE!!
  const [checkingAuth, setCheckingAuth] = useState(true) // TODO CHANGE!!

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (auth && Object.keys(authData).length) {
      authUser()
    } else {
      if (logoutRequested) {
        setLoggedInState(false)
      }
    }
  }, [auth, authData])

  const checkAuth = async () => {
    setCheckingAuth(true)
    // if user is already logged in
    if (auth && Object.keys(authData).length) {
      setLoggedInState(true)
      return setCheckingAuth(false)
    }
    const existingCookie = Cookies.get('lunch-session')
    if (existingCookie) {
      // no auth in state but user has token, refresh auth
      return initializeAuth(history, location)
    }
    setAuth(false)
    setLoggedInState(false)
    setCheckingAuth(false)
  }

  const authUser = () => {
    Cookies.set('lunch-session', authData.token, {
      expires: cookieExpiration,
    })
    setLoggedInState(true)
    setCheckingAuth(false)
  }

  return (
    <>
      {checkingAuth ? (
        <>
          <SvgSpinner show />
        </>
      ) : (
        <>
          {loggedIn ? (
            <>
              <App>
                <Switch>
                  {/* dashboard menu */}
                  <Route
                    exact
                    path={`${baseUrl}/app`}
                    render={() => (
                      <Redirect to={`${baseUrl}/app/dashboard/default`} />
                    )}
                  />
                  <Route
                    exact
                    path={`${baseUrl}/signup/welcome`}
                    component={Welcome}
                  />
                  {/* <Route exact path={`${baseUrl}/`} component={Default} /> */}
                  <Route
                    path={`${baseUrl}/app/dashboard/default`}
                    component={Dashboard}
                  />
                  <Route
                    path={`${baseUrl}/app/table/datatable`}
                    component={DataTableComponent}
                  />
                  <Route
                    path={`${baseUrl}/app/users/userEdit`}
                    component={UserEdit}
                  />
                  <Route
                    path={`${baseUrl}/app/account/payment`}
                    component={BillingPage}
                  />
                  {/* Pricing */}
                  <Route
                    path={`${baseUrl}/price/pricing`}
                    component={Pricing}
                  />
                  <Route
                    exact
                    path={`${baseUrl}/login`}
                    render={() => (
                      <Redirect to={`${baseUrl}/app/dashboard/default`} />
                    )}
                  />
                  <Route
                    exact
                    path={`${baseUrl}/signup`}
                    render={() => (
                      <Redirect to={`${baseUrl}/app/dashboard/default`} />
                    )}
                  />
                  <Route
                    exact
                    path={`${baseUrl}/`}
                    render={() => (
                      <Redirect to={`${baseUrl}/app/dashboard/default`} />
                    )}
                  />
                  <Route
                    path={'*'}
                    render={() => (
                      <Redirect to={`${baseUrl}/app/dashboard/default`} />
                    )}
                  />
                </Switch>
              </App>
            </>
          ) : (
            <Switch>
              <Route path={`${baseUrl}/login`} component={Signin} />
              <Route path={`${baseUrl}/signup`} component={SignupRoutes} />
              <Route
                exact
                path={'/' || 'https://foople.herokuapp.com'}
                component={HomePage}
              />
              <Route
                path={'*'}
                render={() => <Redirect to={`${baseUrl}/login`} />}
              />
            </Switch>
          )}
        </>
      )}
    </>
  )
}

const mapStateToProps = ({
  auth = false,
  authData = {},
  logoutRequested = false,
}) => ({
  auth,
  authData,
  logoutRequested,
})

const mapDispatchToProps = (dispatch) => ({
  setAuth: (value) => dispatch({ type: SET_AUTH, value }),
  initializeAuth: (history, location) =>
    dispatch(initializeAuth(history, location)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccountRoutes),
)
