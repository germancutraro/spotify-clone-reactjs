import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './authConstants';
import * as actions from './authActions';
import * as services from './authServices';

// Get user
function* getUser() {
  try {
    const user = yield services.getUser();
    if (user) yield put(actions.getUserSuccess({ user }));
  } catch (err) {
    yield put(actions.getUserFailure({ error: err.message }));
  }
}

function* getUserSaga() {
  yield takeLatest(constants.GET_USER_START, getUser);
}

export default function* authSaga() {
  yield all([fork(getUserSaga)]);
}
