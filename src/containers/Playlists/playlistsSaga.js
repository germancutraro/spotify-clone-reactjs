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

// Tracks
function* getPlaylistTracks({ payload: { id } }) {
  try {
    const { items: tracks } = yield services.getPlaylistTracks(id);
    console.log('Tracks from saga: ', tracks);
    if (tracks) yield put(actions.getPlaylistTracksSuccess({ tracks }));
  } catch (err) {
    yield put(actions.getPlaylistTracksFailure({ error: err.message }));
  }
}

function* getPlaylistTracksSaga() {
  yield takeLatest(constants.GET_PLAYLIST_TRACKS_START, getPlaylistTracks);
}

export default function* playlistsSaga() {
  yield all([fork(getUserPlaylistsSaga), fork(getPlaylistTracksSaga)]);
}
