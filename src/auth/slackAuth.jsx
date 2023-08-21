import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import qs from 'qs'
import { Redirect, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { toast } from 'react-toastify'

import { baseUri, cookieExpiration } from '../config'
import SvgSpinner from '../components/svg-spinner'
import { ADD_USER, SET_AUTH } from '../constants/actionTypes'

const SlackAuth = ({ addUser, setAuth }) => {
  const [working, setWorking] = useState(true)
  const [redirect, setRedirect] = useState({ status: false, to: '' })
  const location = useLocation()

  useEffect(() => {
    const authUser = async (parsed) => {
      console.log('file: slackAuth.jsx:20 ~ parsed:', parsed)
      const { code, error, state } = parsed
      console.log('file: slackAuth.jsx:21 ~ state:', state)
      console.log('file: slackAuth.jsx:21 ~ code:', code)
      if (error) {
        // TODO user likely declined the permissions
        // delete user from db
        console.error('error! user likely declined the permissions: ', error)
      }
      // invalid query params
      if (!code && !state) {
        console.log('routing to /signup/new')
        return setRedirect({
          status: true,
          to: `/signup/new`,
        })
      }

      const options = {
        method: 'POST',
        body: JSON.stringify({
          code,
          state,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try {
        console.log('hitting oauth')
        const response = await fetch(`/oauth`, options)
        if (!response.ok) throw new Error('No slack Auth')
        const body = await response.json()
        if (response.status === 403) throw new Error('Stripe Error')
        if (
          state === 'login.signup' ||
          (state === 'login' && body.message === 'authed new user')
        ) {
          Cookies.set('lunch-session', body.token, {
            expires: cookieExpiration,
          })
          const decodedJwt = jwtDecode(body.token)
          addUser({ token: body.token, ...decodedJwt })
          setAuth(true)
          setWorking(false)
          setRedirect({
            status: true,
            to: `/app/dashboard/default`,
          })
        } else if (body.message === 'authed existing user' && body.token) {
          Cookies.set('lunch-session', body.token, {
            expires: cookieExpiration,
          })
          const decodedJwt = jwtDecode(body.token)
          setAuth(true)
          addUser({ token: body.token, ...decodedJwt })
          setWorking(false)
          setRedirect({
            status: true,
            to: `/app/dashboard/default`,
          })
          if (state === 'login') {
            toast.success('Welcome back!')
          } else if (state === 'signup') {
            toast.success('Already signed up, redirecting you to the dashboard')
          }
        } else if (body.message === 'signup needed') {
          window.location = `https://slack.com/oauth/v2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup`
        } else if (body.message === 'existing user' && body.token) {
          // initial signup, get user permissions
          window.location = `https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email,&client_id=${process.env.REACT_APP_CLIENT_ID}&state=login.signup`
        } else {
          throw new Error('error ahoy')
        }
      } catch (err) {
        toast.error('Something went wrong')
        setWorking(false)
        setRedirect({
          status: true,
          to: `/signup/new`,
        })
        console.error(err)
      }
    }

    const query = window.location.search.substring(1)
    console.log('file: slackAuth.jsx:106 ~ query:', query)
    const parsed = qs.parse(query)
    console.log('file: slackAuth.jsx:108 ~ parsed:', parsed)
    if (parsed.error) {
      // redirect to signup page
      console.log('redirecting to signup page')
      // setWorking(false)
      // return setRedirect({
      //   status: true,
      //   to: `/signup/new`,
      // })
    }
    if (Object.keys(parsed).length) {
      authUser(parsed)
    } else {
      console.log('redirecting to signup page 2')
      // setRedirect({
      //   status: true,
      //   to: `/signup/new`,
      // })
    }
  }, [addUser, location, setAuth])

  return (
    <>
      {working ? (
        <SvgSpinner show />
      ) : (
        redirect.status && <Redirect to={redirect.to} />
      )}
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => dispatch({ type: ADD_USER, value }),
  setAuth: (value) => dispatch({ type: SET_AUTH, value }),
})

export default connect(null, mapDispatchToProps)(SlackAuth)
