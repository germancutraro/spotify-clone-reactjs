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

// See all

function* getArtistAlbums({ payload: { id } }) {
  try {
    const response = yield services.getArtistAlbums(id);
    if (response)
      yield put(actions.getArtistAlbumsSuccess({ data: response.items }));
  } catch (err) {
    yield put(actions.getArtistAlbumsFailure({ error: err.message }));
  }
}

function* getArtistAlbumsSaga() {
  yield takeLatest(constants.GET_ARTIST_ALBUMS_START, getArtistAlbums);
}

function* getArtistSongs({ payload: { id } }) {
  try {
    const response = yield services.getArtistSongs(id);
    if (response)
      yield put(actions.getArtistSongsSuccess({ data: response.tracks }));
  } catch (err) {
    yield put(actions.getArtistSongsFailure({ error: err.message }));
  }
}

function* getArtistSongsSaga() {
  yield takeLatest(constants.GET_ARTIST_SONGS_START, getArtistSongs);
}

function* getRelatedArtists({ payload: { id } }) {
  try {
    const response = yield services.getRelatedArtists(id);
    if (response)
      yield put(actions.getRelatedArtistsSuccess({ data: response.artists }));
  } catch (err) {
    yield put(actions.getRelatedArtistsFailure({ error: err.message }));
  }
}

function* getRelatedArtistsSaga() {
  yield takeLatest(constants.GET_RELATED_ARTISTS_START, getRelatedArtists);
}

export default function* searchSaga() {
  yield all([
    fork(getResultsSaga),
    fork(getArtistAlbumsSaga),
    fork(getArtistSongsSaga),
    fork(getRelatedArtistsSaga)
  ]);
}
