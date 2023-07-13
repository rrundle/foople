import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import App from './components/app'
import initializeAuth from './actions/initializeAuth'
import { cookieExpiration } from './config'

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
    console.log('Account Routes!')
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
                    path={`${process.env.PUBLIC_URL}/app`}
                    render={() => (
                      <Redirect
                        to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/signup/welcome`}
                    component={Welcome}
                  />
                  {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Default} /> */}
                  <Route
                    path={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                    component={Dashboard}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/app/table/datatable`}
                    component={DataTableComponent}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/app/users/userEdit`}
                    component={UserEdit}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/app/account/payment`}
                    component={BillingPage}
                  />
                  {/* Pricing */}
                  <Route
                    path={`${process.env.PUBLIC_URL}/price/pricing`}
                    component={Pricing}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/login`}
                    render={() => (
                      <Redirect
                        to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/signup`}
                    render={() => (
                      <Redirect
                        to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={`${process.env.PUBLIC_URL}/`}
                    render={() => (
                      <Redirect
                        to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                      />
                    )}
                  />
                  <Route
                    path={'*'}
                    render={() => (
                      <Redirect
                        to={`${process.env.PUBLIC_URL}/app/dashboard/default`}
                      />
                    )}
                  />
                </Switch>
              </App>
            </>
          ) : (
            <Switch>
              <Route
                path={`${process.env.PUBLIC_URL}/login`}
                component={Signin}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/signup`}
                component={SignupRoutes}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/` || process.env.PUBLIC_URL}
                component={HomePage}
              />
              <Route
                path={'*'}
                render={() => (
                  <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                )}
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
