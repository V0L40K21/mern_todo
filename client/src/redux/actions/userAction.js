export const types = {
  LOGIN: {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE',
    LOGOUT: 'LOGIN_LOGOUT',
  },
  REGISTER: {
    REQUEST: 'REGISTER_REQUEST',
    SUCCESS: 'REGISTER_SUCCESS',
    FAILURE: 'REGISTER_FAILURE',
  },
}

export const loginRequest = (data) => {
  return {
    type: types.LOGIN.REQUEST,
    payload: data,
  }
}
export const loginSuccess = (data) => {
  return {
    type: types.LOGIN.SUCCESS,
    payload: data,
  }
}
export const loginFailure = (data) => {
  return {
    type: types.LOGIN.FAILURE,
    payload: data
  }
}
export const loginLogout = (data) => {
  return {
    type: types.LOGIN.LOGOUT,
    payload: data
  }
}

export const registerRequest = (data) => {
  return {
    type: types.REGISTER.REQUEST,
    payload: data
  }
}
export const registerSuccess = (data) => {
  return {
    type: types.REGISTER.SUCCESS,
    payload: data,
  }
}
export const registerFailure = (data) => {
  return {
    type: types.REGISTER.FAILURE,
    payload: data
  }
}
