import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import rootReducer from './redux/rootReducer'
import App from './App'
import rootSaga from './redux/rootSaga'
import './index.css'

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(
  applyMiddleware(saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : {}
))

saga.run(rootSaga)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(app, document.getElementById('root'))
