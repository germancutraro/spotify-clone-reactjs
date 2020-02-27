import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './playlistsConstants';
import * as actions from './playlistsActions';
import * as services from './playlistsServices';

function* getUserPlaylists() {
  try {
    const { items: playlists } = yield services.getUserPlaylists();
    if (playlists) yield put(actions.getUserPlaylistsSuccess({ playlists }));
  } catch (err) {
    yield put(actions.getUserPlaylistsFailure({ error: err.message }));
  }
}

function* getUserPlaylistsSaga() {
  yield takeLatest(constants.GET_USER_PLAYLISTS_START, getUserPlaylists);
}

// playlist
function* getPlaylist({ payload: { id } }) {
  try {
    const playlist = yield services.getPlaylist(id);
    console.log('toldo: ', playlist);
    if (playlist) yield put(actions.getPlaylistSuccess({ playlist }));
  } catch (err) {
    yield put(actions.getPlaylistFailure({ error: err.message }));
  }
}

function* getPlaylistSaga() {
  yield takeLatest(constants.GET_PLAYLIST_START, getPlaylist);
}

export default function* playlistsSaga() {
  yield all([fork(getUserPlaylistsSaga), fork(getPlaylistSaga)]);
}
