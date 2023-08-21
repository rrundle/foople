import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.scss'
import AccountRoutes from './AccountRoutes'

// Import custom Components
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'

// Auth
import SlackAuth from './auth/slackAuth'

import { baseUri } from './config'

const Router = () => {
  console.log('in the router!: ', baseUri)
  debugger
  return (
    <Switch>
      <Route exact path={`/`} component={AccountRoutes} />

      <Route path={`/app`} component={AccountRoutes} />

      <Route exact path={`/slack-auth`} component={SlackAuth} />

      <Route path={`/signup`} component={AccountRoutes} />

      <Route path={`/login`} component={AccountRoutes} />

      <Route path={`/pages/forgetPwd`} component={ForgetPwd} />

      <Route path={`/pages/resetPwd`} component={ResetPwd} />

      <Route component={AccountRoutes} />
    </Switch>
  )
}

export default Router
