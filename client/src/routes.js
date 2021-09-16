import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ToDosPage from './pages/ToDosPage'
import AuthPage from './pages/AuthPage'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route path={'/todos'} exact>
          <ToDosPage/>
        </Route>
        <Redirect to={'/todos'}/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path={'/'} exact>
        <AuthPage/>
      </Route>
      <Redirect to={'/'}/>
    </Switch>
  )
}
