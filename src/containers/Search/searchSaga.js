import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './searchConstants';
import * as actions from './searchActions';
import * as services from './searchServices';

function* getResults({ payload: { query } }) {
  try {
    const response = yield services.getSearch(query);
    if (response) yield put(actions.searchSuccess({ results: response }));
  } catch (err) {
    yield put(actions.searchFailure({ error: err.message }));
  }
}

function* getResultsSaga() {
  yield takeLatest(constants.GET_SEARCH_START, getResults);
}

export default function* searchSaga() {
  yield all([fork(getResultsSaga)]);
}
