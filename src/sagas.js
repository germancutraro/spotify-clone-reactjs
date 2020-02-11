import { all, fork } from 'redux-saga/effects';
import authSaga from './containers/Auth/authSaga';

// sagas

export default function* root() {
  yield all([fork(authSaga)]);
}
