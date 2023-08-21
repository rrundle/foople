import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import man from '../../assets/images/dashboard/user.png'
import { CreditCard, DollarSign, Settings, LogOut } from 'react-feather'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Cookies from 'js-cookie'

import { SET_AUTH, ADD_USER, REQUEST_LOGOUT } from '../../constants/actionTypes'

import { baseUri } from '../../config'

const UserMenu = ({ history, setAuth, setUser, requestLogout, authData }) => {
  const [profile, setProfile] = useState('')
  const isPaymentEnabled = process.env.PAYMENT_FEATURE_ENABLED
  const { avatarSmall } = authData

  useEffect(() => {
    setProfile(avatarSmall || man)
  }, [])

  const logOut = () => {
    localStorage.removeItem('profileURL')
    Cookies.remove('lunch-session')
    setAuth(false)
    setUser({})
    requestLogout()
    history.push(`/login`)
  }

  return (
    <Fragment>
      <li className="onhover-dropdown">
        <div className="media align-items-center">
          <img
            className="align-self-center pull-right rounded-circle blur-up lazyloaded"
            src={profile}
            alt="header-user"
          />
          {/* <div className="dotted-animation">
            <span className="animate-circle"></span>
            <span className="main-circle"></span>
          </div> */}
        </div>
        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
          {/* <li>
            <Link to={`/users/userEdit`}>
              <Settings />
              Settings
            </Link>
          </li> */}
          {isPaymentEnabled && (
            <>
              <li>
                <Link to={`/price/pricing`}>
                  <DollarSign />
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={`/app/account/payment`}>
                  <CreditCard />
                  Billing
                </Link>
              </li>
            </>
          )}
          <li>
            <a onClick={logOut} href="#!">
              <LogOut /> Log out
            </a>
          </li>
        </ul>
      </li>
    </Fragment>
  )
}

const mapStateToProps = ({ authData }) => ({ authData })

const mapDispatchToProps = (dispatch) => ({
  setAuth: (value) => dispatch({ type: SET_AUTH, value }),
  setUser: (value) => dispatch({ type: ADD_USER, value }),
  requestLogout: () => dispatch({ type: REQUEST_LOGOUT }),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserMenu),
)
