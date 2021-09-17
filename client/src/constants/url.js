// const BACKEND_URL = 'http://127.0.0.1:5000'
const BACKEND_URL = 'https://vol4ok.herokuapp.com'

const ENDPOINT_AUTH = BACKEND_URL + '/api/auth/login'
const ENDPOINT_REGISTER = BACKEND_URL + '/api/auth/register'

const ENDPOINT_TODO_ALL = BACKEND_URL + '/api/todos'
const ENDPOINT_TODO_ADD = BACKEND_URL + '/api/todos/add'
const ENDPOINT_TODO_DELETE = BACKEND_URL + '/api/todos/delete'
const ENDPOINT_TODO_COMPLETE = BACKEND_URL + '/api/todos/complete'
const ENDPOINT_TODO_IMPORTANT = BACKEND_URL + '/api/todos/important'

export {
  BACKEND_URL,

  ENDPOINT_AUTH,
  ENDPOINT_REGISTER,

  ENDPOINT_TODO_ALL,
  ENDPOINT_TODO_ADD,
  ENDPOINT_TODO_DELETE,
  ENDPOINT_TODO_COMPLETE,
  ENDPOINT_TODO_IMPORTANT
}
