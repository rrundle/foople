import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { withRouter } from 'react-router'
import LandingPage from '../components/landing'

const Signin = () => (
  <div>
    <div className="page-wrapper">
      <LandingPage />
    </div>
  </div>
)

export default withRouter(Signin)
