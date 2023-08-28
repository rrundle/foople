import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.scss'
import SvgSpinner from './components/svg-spinner'

// Signup Components
import Signup from './auth/signup'
import Welcome from './auth/welcome'

// payment components

const SignupRoutes = () => {
  const [verifiedSignup, setVerifiedSignup] = useState(true) // TODO CHANGE!!!
  const [checkingSignupStatus, setCheckingSignupStatus] = useState(false) // TODO CHANGE!!!

  useEffect(() => {
    checkSignupStatus()
    // only want to run this on mount
  }, [])

  const checkSignupStatus = async () => {
    const signupCookie = Cookies.get('signup-process')
    if (!signupCookie) {
      setVerifiedSignup(false)
      return setCheckingSignupStatus(false)
    }
    // user is rightfully in the signup process
    setVerifiedSignup(true)
    return setCheckingSignupStatus(false)
  }

  return (
    <>
      {checkingSignupStatus ? (
        <SvgSpinner />
      ) : verifiedSignup ? (
        <>
          <Route exact path={`/signup/welcome`} component={Welcome} />
          <Route exact path={`/signup/new`} component={Signup} />
          <Route
            exact
            path={`/signup`}
            render={() => <Redirect to={`/signup/new`} />}
          />
        </>
      ) : (
        <Redirect to={`/signup/new`} />
      )}
    </>
  )
}

export default SignupRoutes
