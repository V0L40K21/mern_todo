import {takeLatest, call, put} from 'redux-saga/effects';

import {
  loginFailure,
  loginLogout,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerSuccess,
  types
} from '../actions/userAction'
import {ENDPOINT_AUTH, ENDPOINT_REGISTER} from '../../constants/url'
import api from '../../helpers/api'

function* loginSaga({payload}) {
  const response = yield call(api, ENDPOINT_AUTH, 'POST', {...payload});
  console.log(response.data);
  const {data, status} = response;
  if (status === 200) {
    yield put(loginSuccess({...data}));
  } else {
    yield put(loginFailure({...data}));
    yield put(loginLogout())
  }
}

function* registerSaga({payload}) {
  const response = yield call(api, ENDPOINT_REGISTER, 'POST', {...payload});
  console.log(response);
  const {data, status} = response;
  if (status === 201) {
    yield put(registerSuccess({...data}));
    yield put(loginRequest({...payload}));
  } else {
    yield put(registerFailure({...data}));
  }
}

function* watchLoginSaga() {
  yield takeLatest(types.LOGIN.REQUEST, loginSaga);
}

function* watchRegisterSaga() {
  yield takeLatest(types.REGISTER.REQUEST, registerSaga);
}

export {
  watchLoginSaga,
  watchRegisterSaga,
};
