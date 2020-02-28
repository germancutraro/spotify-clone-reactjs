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

// Albums
function* getAlbums() {
  try {
    const { items: albums } = yield services.getAlbums();
    if (albums) yield put(actions.getAlbumsSuccess({ albums }));
  } catch (err) {
    yield put(actions.getAlbumsFailure({ error: err.message }));
  }
}

function* getAlbumsSaga() {
  yield takeLatest(constants.GET_ALBUMS_START, getAlbums);
}

export default function* librarySaga() {
  yield all([fork(getTopArtistsSaga), fork(getAlbumsSaga)]);
}
