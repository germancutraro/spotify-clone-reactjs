import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './searchConstants';
import * as actions from './searchActions';
import * as services from './searchServices';

function* getBrowse() {
  try {
    const browse = yield services.getBrowse();
    if (browse)
      yield put(actions.getBrowseSuccess({ browse: browse.content.items }));
  } catch (err) {
    yield put(actions.getBrowseFailure({ error: err.message }));
  }
}

function* getBrowseSaga() {
  yield takeLatest(constants.GET_BROWSE_START, getBrowse);
}

export default function* searchSaga() {
  yield all([fork(getBrowseSaga)]);
}
