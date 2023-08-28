import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

import Button from '../components/button'
import ButtonSecondary from '../components/button-secondary'
import SvgSpinner from '../components/svg-spinner'
import { COMPANY_SIGNUP_INFO } from '../constants/actionTypes'

const Welcome = ({ addCompanyInfo }) => {
  const [working, setAppWorking] = useState(true)
  const [companyInfo, setCompanyInfo] = useState({})
  const [redirect, setRedirect] = useState({ status: false, to: '' })

  useEffect(() => {
    const getCompanyInfo = async () => {
      const userCookie = Cookies.get('lunch-session')
      const options = {
        method: 'POST',
        body: JSON.stringify({
          code: userCookie,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }

      try {
        const response = await fetch(`/company/get`, options)
        const body = await response.json()
        setCompanyInfo(body)
        addCompanyInfo(body)
      } catch (err) {
        console.error('err: ', err)
      } finally {
        setAppWorking(false)
      }
    }
    getCompanyInfo()
  }, [addCompanyInfo])

  const responseClick = async (welcome) => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({
        companyInfo,
        welcome,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await fetch(`/welcome`, options)
      if (!response.ok) throw new Error('No slack Auth')
      setRedirect({
        status: true,
        to: `/app/dashboard/default`,
      })
    } catch (err) {
      console.error(err)
      // TODO Say we couldnt say hello
      setRedirect({
        status: true,
        to: `/app/dashboard/default`,
      })
    }
  }

  return working ? (
    <SvgSpinner show />
  ) : redirect.status ? (
    <Redirect to={redirect.to} />
  ) : (
    <div className="welcome-page">
      <div className="welcome-page-content">
        <div className="welcome-title">Welcome to Foople!</div>
        <div className="welcome-greeting">Can we say hello to the team?</div>
        <div className="welcome-greeting-description">
          We'll just post a message in Slack letting them know that the app has
          been installed
        </div>
        <div className="welcome-ctas">
          <ButtonSecondary label="No" onClick={(e) => responseClick(false)} />
          <Button label="Yes" onClick={(e) => responseClick(true)} />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addCompanyInfo: (value) => dispatch({ type: COMPANY_SIGNUP_INFO, value }),
})

export default connect(null, mapDispatchToProps)(Welcome)
