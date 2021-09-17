import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'

import {useRoutes} from './routes'
import NavBar from './components/navBar/NavBar'

const App = ({isAuth}) => {
  return (
    <BrowserRouter>
      <NavBar isAuth={isAuth} />
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
