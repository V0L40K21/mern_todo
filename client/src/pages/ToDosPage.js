import React from 'react'
import {connect} from 'react-redux'

import {loginLogout} from '../redux/actions/userAction'

const ToDosPage = ({loginLogout}) => {
  return(
    <div>
      <h1>ToDo's page</h1>
      <button onClick={() => loginLogout()}>Выйти</button>
    </div>
  )
}

export default connect(null, {loginLogout})(ToDosPage)
