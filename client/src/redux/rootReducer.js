import {combineReducers} from 'redux'

import {userReducer} from './reducers/userReducer'
import {todoReducer} from './reducers/todoReducer'

const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
})

export default rootReducer
