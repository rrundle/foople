import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.scss'
import AccountRoutes from './AccountRoutes'

// Import custom Components
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'

// Auth
import SlackAuth from './auth/slackAuth'

// Config
import { config } from './config'

const environment = config.get('environment')
export const baseUrl =
  environment === 'dev' ? '' : 'https://foople.herokuapp.com'

const Router = () => {
  console.log('in the router!: ', baseUrl)
  return (
    <Switch>
      <Route exact path={`${baseUrl}/`} component={AccountRoutes} />

      <Route path={`${baseUrl}/app`} component={AccountRoutes} />

      <Route exact path={`${baseUrl}/slack-auth`} component={SlackAuth} />

      <Route path={`${baseUrl}/signup`} component={AccountRoutes} />

      <Route path={`${baseUrl}/login`} component={AccountRoutes} />

      <Route path={`${baseUrl}/pages/forgetPwd`} component={ForgetPwd} />
      <Route path={`${baseUrl}/pages/resetPwd`} component={ResetPwd} />
      <Route component={AccountRoutes} />
    </Switch>
  )
}

export default Router
