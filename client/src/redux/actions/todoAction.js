export const types = {
  TODO_ADD: {
    REQUEST: 'TODO_ADD_REQUEST',
    SUCCESS: 'TODO_ADD_SUCCESS',
    FAILURE: 'TODO_ADD_FAILURE',
  },
  TODO_ALL: {
    REQUEST: 'TODO_ALL_REQUEST',
    SUCCESS: 'TODO_ALL_SUCCESS',
    FAILURE: 'TODO_ALL_FAILURE',
  },
  TODO_DELETE: {
    REQUEST: 'TODO_DELETE_REQUEST',
    SUCCESS: 'TODO_DELETE_SUCCESS',
    FAILURE: 'TODO_DELETE_FAILURE',
  },
  TODO_COMPLETE: {
    REQUEST: 'TODO_COMPLETE_REQUEST',
    SUCCESS: 'TODO_COMPLETE_SUCCESS',
    FAILURE: 'TODO_COMPLETE_FAILURE',
  },
  TODO_IMPORTANT: {
    REQUEST: 'TODO_IMPORTANT_REQUEST',
    SUCCESS: 'TODO_IMPORTANT_SUCCESS',
    FAILURE: 'TODO_IMPORTANT_FAILURE',
  },
}

export const todoAddRequest = (data) => {
  return {
    type: types.TODO_ADD.REQUEST,
    payload: data
  }
}
export const todoAddSuccess = (data) => {
  return {
    type: types.TODO_ADD.SUCCESS,
    payload: data,
  }
}
export const todoAddFailure = (data) => {
  return {
    type: types.TODO_ADD.FAILURE,
    payload: data
  }
}

export const todoAllRequest = (data) => {
  return {
    type: types.TODO_ALL.REQUEST,
    payload: data
  }
}
export const todoAllSuccess = (data) => {
  return {
    type: types.TODO_ALL.SUCCESS,
    payload: data,
  }
}
export const todoAllFailure = (data) => {
  return {
    type: types.TODO_ALL.FAILURE,
    payload: data
  }
}

export const todoDeleteRequest = (data) => {
  return {
    type: types.TODO_DELETE.REQUEST,
    payload: data
  }
}
export const todoDeleteSuccess = (data) => {
  return {
    type: types.TODO_DELETE.SUCCESS,
    payload: data,
  }
}
export const todoDeleteFailure = (data) => {
  return {
    type: types.TODO_DELETE.FAILURE,
    payload: data
  }
}

export const todoCompleteRequest = (data) => {
  return {
    type: types.TODO_COMPLETE.REQUEST,
    payload: data
  }
}
export const todoCompleteSuccess = (data) => {
  return {
    type: types.TODO_COMPLETE.SUCCESS,
    payload: data,
  }
}
export const todoCompleteFailure = (data) => {
  return {
    type: types.TODO_COMPLETE.FAILURE,
    payload: data
  }
}

export const todoImportantRequest = (data) => {
  return {
    type: types.TODO_IMPORTANT.REQUEST,
    payload: data
  }
}
export const todoImportantSuccess = (data) => {
  return {
    type: types.TODO_IMPORTANT.SUCCESS,
    payload: data,
  }
}
export const todoImportantFailure = (data) => {
  return {
    type: types.TODO_IMPORTANT.FAILURE,
    payload: data
  }
}
