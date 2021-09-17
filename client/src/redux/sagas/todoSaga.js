import {takeLatest, call, put} from 'redux-saga/effects';

import {
  todoAddSuccess,
  todoAddFailure,
  types,
  todoAllSuccess,
  todoAllFailure,
  todoAllRequest,
  todoDeleteSuccess,
  todoDeleteFailure,
  todoCompleteSuccess,
  todoCompleteFailure, todoImportantSuccess, todoImportantFailure
} from '../actions/todoAction'
import {
  ENDPOINT_TODO_ADD,
  ENDPOINT_TODO_ALL,
  ENDPOINT_TODO_COMPLETE,
  ENDPOINT_TODO_DELETE,
  ENDPOINT_TODO_IMPORTANT
} from '../../constants/url'
import api from '../../helpers/api'

function* todoAddSaga({payload}) {
  const response = yield call(api, ENDPOINT_TODO_ADD, 'POST', {...payload});
  const {data, status} = response;
  if (status === 201) {
    yield put(todoAddSuccess({...data}));
    yield put(todoAllRequest({userId: payload.userId}));
  } else {
    yield put(todoAddFailure({...data}));
  }
}

function* todoAllSaga({payload}) {
  const response = yield call(api, ENDPOINT_TODO_ALL, 'GET', {...payload});
  const {data, status} = response;
  if (status === 200) {
    yield put(todoAllSuccess(data));
  } else {
    yield put(todoAllFailure({...data}));
  }
}

function* todoDeleteSaga({payload}) {
  const response = yield call(
    api,
    ENDPOINT_TODO_DELETE,
    'DELETE',
    {...payload}
  );
  const {data, status} = response;
  if (status === 200) {
    yield put(todoDeleteSuccess({...data}));
    yield put(todoAllRequest({userId: payload.userId}));
  } else {
    yield put(todoDeleteFailure({...data}));
  }
}

function* todoCompleteSaga({payload}) {
  const response = yield call(
    api,
    ENDPOINT_TODO_COMPLETE,
    'GET',
    {...payload}
  );
  const {data, status} = response;
  if (status === 200) {
    yield put(todoCompleteSuccess({...data}));
    yield put(todoAllRequest({userId: payload.userId}));
  } else {
    yield put(todoCompleteFailure({...data}));
  }
}

function* todoImportantSaga({payload}) {
  const response = yield call(
    api,
    ENDPOINT_TODO_IMPORTANT,
    'GET',
    {...payload}
  );
  const {data, status} = response;
  if (status === 200) {
    yield put(todoImportantSuccess({...data}));
    yield put(todoAllRequest({userId: payload.userId}));
  } else {
    yield put(todoImportantFailure({...data}));
  }
}

function* watchTodoAddSaga() {
  yield takeLatest(types.TODO_ADD.REQUEST, todoAddSaga);
}

function* watchTodoAllSaga() {
  yield takeLatest(types.TODO_ALL.REQUEST, todoAllSaga);
}

function* watchTodoDeleteSaga() {
  yield takeLatest(types.TODO_DELETE.REQUEST, todoDeleteSaga);
}

function* watchTodoCompleteSaga() {
  yield takeLatest(types.TODO_COMPLETE.REQUEST, todoCompleteSaga);
}

function* watchTodoImportantSaga() {
  yield takeLatest(types.TODO_IMPORTANT.REQUEST, todoImportantSaga);
}

export {
  watchTodoAddSaga,
  watchTodoAllSaga,
  watchTodoDeleteSaga,
  watchTodoCompleteSaga,
  watchTodoImportantSaga,
};
