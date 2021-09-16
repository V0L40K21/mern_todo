import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'

import {useRoutes} from './routes'

const App = () => {
  return (
    <BrowserRouter>
      <div className={'container'}>
        {useRoutes(false)}
      </div>
    </BrowserRouter>
  )
}

export default App
