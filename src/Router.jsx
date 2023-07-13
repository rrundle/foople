import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './index.scss'
import AccountRoutes from './AccountRoutes'

// Import custom Components
import ForgetPwd from './pages/forgetPwd'
import ResetPwd from './pages/resetPwd'

// Auth
import SlackAuth from './auth/slackAuth'

const Router = () => {
  console.log('in the router!: ', process.env.PUBLIC_URL)
  return (
    <Switch>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={AccountRoutes}
      />

      <Route path={`${process.env.PUBLIC_URL}/app`} component={AccountRoutes} />

      <Route
        exact
        path={`${process.env.PUBLIC_URL}/slack-auth`}
        component={SlackAuth}
      />

      <Route
        path={`${process.env.PUBLIC_URL}/signup`}
        component={AccountRoutes}
      />

      <Route
        path={`${process.env.PUBLIC_URL}/login`}
        component={AccountRoutes}
      />

      <Route
        path={`${process.env.PUBLIC_URL}/pages/forgetPwd`}
        component={ForgetPwd}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/pages/resetPwd`}
        component={ResetPwd}
      />
      <Route component={AccountRoutes} />
    </Switch>
  )
}

export default Router
