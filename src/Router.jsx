import React, { useState } from 'react'
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
  const [baseUriSet, setBaseUri] = useState(false)

  useEffect(() => {
    console.log('in the setBaseUri hook: ', baseUri)
    setBaseUri(baseUri === undefined || baseUri === null ? false : true)
  }, [baseUri])

  debugger
  return (
    <>
      {!baseUriSet ? (
        <>
          <SvgSpinner show />
        </>
      ) : (
        <>
          <Switch>
            <Route exact path={`${baseUri}/`} component={AccountRoutes} />

            <Route exact path={baseUri} component={AccountRoutes} />

            <Route path={`${baseUri}/app`} component={AccountRoutes} />

            <Route exact path={`${baseUri}/slack-auth`} component={SlackAuth} />

            <Route path={`${baseUri}/signup`} component={AccountRoutes} />

            <Route path={`${baseUri}/login`} component={AccountRoutes} />

            <Route path={`${baseUri}/pages/forgetPwd`} component={ForgetPwd} />

            <Route path={`${baseUri}/pages/resetPwd`} component={ResetPwd} />
          </Switch>
        </>
      )}
    </>
  )
}

export default Router
