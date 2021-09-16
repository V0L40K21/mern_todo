import {all} from 'redux-saga/effects';

import {watchLoginSaga, watchRegisterSaga} from './sagas/userSaga'

export default function* rootSaga() {
  yield all([
    watchLoginSaga(),
    watchRegisterSaga(),
  ]);
}
