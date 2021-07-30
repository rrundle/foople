import React from 'react'
import logo from '../assets/images/lunch-poll-logo.svg'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { withRouter } from 'react-router'

const Signup = () => (
  <div>
    <div className="page-wrapper">
      <div className="container-fluid p-0">
        <div></div>
        {/* <!-- login page start--> */}
        <div className="authentication-main">
          <div className="row">
            <div className="col-md-12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <div className="text-center">
                    <img src={logo} alt="" />
                    <h3 className="signup-title">Lunch Poll</h3>
                  </div>
                  <div className="card mt-4 login-card">
                    <div className="card-body">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        {/* <!-- login page end--> */}
      </div>
    </div>
  </div>
)

export default withRouter(Signup)
