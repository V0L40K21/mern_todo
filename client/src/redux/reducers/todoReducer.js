import {types} from '../actions/todoAction'

const initialState = {
  loading: false,
  todos: [],
  message: ''
}

export const todoReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case types.TODO_ADD.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.TODO_ADD.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: '',
      }
    }
    case types.TODO_ADD.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.TODO_ALL.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.TODO_ALL.SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: payload,
        message: '',
      }
    }
    case types.TODO_ALL.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.TODO_DELETE.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.TODO_DELETE.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: '',
      }
    }
    case types.TODO_DELETE.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.TODO_COMPLETE.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.TODO_COMPLETE.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: '',
      }
    }
    case types.TODO_COMPLETE.FAILURE: {
      return {
        ...state,
        loading: false,
        message: payload.message,
      }
    }
    case types.TODO_IMPORTANT.REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.TODO_IMPORTANT.SUCCESS: {
      return {
        ...state,
        loading: false,
        message: '',
      }
    }
    case types.TODO_IMPORTANT.FAILURE: {
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
