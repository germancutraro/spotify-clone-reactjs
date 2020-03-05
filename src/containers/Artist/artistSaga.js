import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './artistConstants';
import * as actions from './artistActions';
import * as services from './artistServices';

function* getArtist({ payload: { id } }) {
  try {
    const artist = yield services.getArtist(id);
    console.log(artist);
    if (artist) yield put(actions.getArtistSuccess({ artist }));
  } catch (err) {
    yield put(actions.getArtistFailure({ error: err.message }));
  }
}

function* getArtistSaga() {
  yield takeLatest(constants.GET_ARTIST_START, getArtist);
}

export default function* artistSaga() {
  yield all([fork(getArtistSaga)]);
}
