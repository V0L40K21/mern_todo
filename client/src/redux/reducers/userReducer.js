import {types} from '../actions/userAction'

const initialState = {
  loading: false,
  id: null,
  token: null,
  message: ''
}

export const userReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case types.LOGIN.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.LOGIN.SUCCESS: {
      return {
        ...state,
        loading: false,
        id: payload.userId,
        token: payload.token,
        message: '',
      }
    }
    case types.LOGIN.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.REGISTER.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.REGISTER.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.REGISTER.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    default:
      return state
  }
}
