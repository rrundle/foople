import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ScrollContext } from 'react-router-scroll-4'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './index.scss'
import * as serviceWorker from './serviceWorker'
import store from './store/index'
import Router from './Router'

const Root = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={`/`}>
          <ScrollContext>
            <>
              <Router />
              <ToastContainer />
            </>
          </ScrollContext>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

serviceWorker.unregister()