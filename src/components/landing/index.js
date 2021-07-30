import React from 'react'
import slackGif from '../../assets/images/Slack_screencast.gif'
import { config } from '../../config'

const LandingPage = ({ children }) => {
  console.log('process.env: ', process.env)
  console.log('config: ', config)
  const appId = config.get('clientId')
  console.log('appId', appId)
  return (
    <div>
      <div className="landing-page">
        <div className="landing-page-body">
          <nav className="landing-page-nav">
            <a
              href={`https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id=${process.env.REACT_APP_CLIENT_ID}&state=login`}
            >
              Login
            </a>
          </nav>
          <div className="landing-page-hero">
            <div className="landing-page-hero__top">
              <p className="landing-title">Foople</p>
              <p className="landing-subtitle">The Food Poll</p>
              <div className="slack-signup-wrapper">
                <a
                  href={`https://slack.com/oauth/v2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup`}
                >
                  <img
                    alt="Add to Slack"
                    height="40"
                    width="139"
                    src="https://platform.slack-edge.com/img/add_to_slack.png"
                    srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                  />
                </a>
              </div>
            </div>
            <div className="landing-page-hero__bottom">
              <div className="background-hero">
                <img src={slackGif} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
