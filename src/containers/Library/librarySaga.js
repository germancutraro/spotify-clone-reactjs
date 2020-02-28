import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './libraryConstants';
import * as actions from './libraryActions';
import * as services from './libraryServices';

function* getTopArtists() {
  try {
    const artists = yield services.getTopArtists();
    if (artists)
      yield put(actions.getTopArtistsSuccess({ artists: artists.items }));
  } catch (err) {
    yield put(actions.getTopArtistsFailure({ error: err.message }));
  }
}

function* getTopArtistsSaga() {
  yield takeLatest(constants.GET_TOP_ARTISTS_START, getTopArtists);
}

export default function* librarySaga() {
  yield all([fork(getTopArtistsSaga)]);
}
