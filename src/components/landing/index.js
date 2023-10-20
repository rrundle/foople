import React from 'react'
import slackGif from '../../assets/images/Slack_screencast.gif'
import { config } from '../../config'

const LandingPage = ({ children }) => {
  const appId = config.get('clientId')
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
              <p className="landing-description">
                Create a randomized poll in Slack to decide where to get food.
              </p>
              <p className="landing-description">
                The days of taking forever to decide where to eat are over.
              </p>
              <div className="slack-signup-wrapper">
                <a
                  href={`https://slack.com/oauth/v2/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=commands,app_mentions:read,channels:history,channels:manage,chat:write,chat:write.public,im:history,im:write,incoming-webhook,mpim:write,users:read&user_scope=chat:write,identify,im:write,channels:write,groups:write,mpim:write&state=signup`}
                  style={{
                    alignItems: 'center',
                    color: '#fff',
                    backgroundColor: '#18161f',
                    border: '0',
                    borderRadius: '4px',
                    display: 'inline-flex',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    height: '56px',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    width: '276px',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      height: '24px',
                      width: '24px',
                      marginRight: '12px',
                    }}
                    viewBox="0 0 122.8 122.8"
                  >
                    <path
                      d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                      fill="#e01e5a"
                    ></path>
                    <path
                      d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                      fill="#36c5f0"
                    ></path>
                    <path
                      d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                      fill="#2eb67d"
                    ></path>
                    <path
                      d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                      fill="#ecb22e"
                    ></path>
                  </svg>
                  Add to Slack
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
