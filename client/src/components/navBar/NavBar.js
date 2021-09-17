import React from 'react'
import {connect} from 'react-redux'
import {loginLogout} from '../../redux/actions/userAction'

const NavBar = ({isAuth, loginLogout}) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-1 myBar">
        <a href="/" className="brand-logo" onClick={() => loginLogout()}>ToDo app</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuth && <li><a href="sass.html">Выйти</a></li>}
        </ul>
      </div>
    </nav>
  )
}

export default connect(null, {loginLogout})(NavBar)
