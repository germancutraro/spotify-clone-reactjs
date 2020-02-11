import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './playlistsConstants';
import * as actions from './playlistsActions';
import * as services from './playlistsServices';

function* getUserPlaylists() {
  try {
    const { items: playlists } = yield services.getUserPlaylists();
    console.log('playlists from saga: ', playlists);
    if (playlists) yield put(actions.getUserPlaylistsSuccess({ playlists }));
  } catch (err) {
    yield put(actions.getUserPlaylistsFailure({ error: err.message }));
  }
}

function* getUserPlaylistsSaga() {
  yield takeLatest(constants.GET_USER_PLAYLISTS_START, getUserPlaylists);
}

export default function* playlistsSaga() {
  yield all([fork(getUserPlaylistsSaga)]);
}
