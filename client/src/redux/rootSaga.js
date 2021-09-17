import {all} from 'redux-saga/effects';

import {watchLoginSaga, watchRegisterSaga} from './sagas/userSaga'
import {
  watchTodoAddSaga,
  watchTodoAllSaga,
  watchTodoCompleteSaga,
  watchTodoDeleteSaga,
  watchTodoImportantSaga
} from './sagas/todoSaga'

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchRegisterSaga(),

    watchTodoAddSaga(),
    watchTodoAllSaga(),
    watchTodoDeleteSaga(),
    watchTodoCompleteSaga(),
    watchTodoImportantSaga(),
  ]);
}
