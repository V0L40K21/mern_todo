import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'

import {useRoutes} from './routes'

const App = ({isAuth}) => {
  return (
    <BrowserRouter>
      <div className={'container'}>
        {useRoutes(isAuth)}
      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.user.isAuth,
})

export default connect(mapStateToProps)(App)
