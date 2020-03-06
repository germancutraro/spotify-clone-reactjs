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
    if (playlist) yield put(actions.getPlaylistSuccess({ playlist }));
  } catch (err) {
    yield put(actions.getPlaylistFailure({ error: err.message }));
  }
}

function* getPlaylistSaga() {
  yield takeLatest(constants.GET_PLAYLIST_START, getPlaylist);
}

// Tracks
function* getUserTracks() {
  try {
    const tracks = yield services.getUserTracks();
    if (tracks)
      yield put(actions.getUserTracksSuccess({ playlist: tracks.items }));
  } catch (err) {
    yield put(actions.getUserTracksFailure({ error: err.message }));
  }
}

function* getUserTracksSaga() {
  yield takeLatest(constants.GET_USER_TRACKS_START, getUserTracks);
}

// getRandomTracks
function* getRandomTracks() {
  try {
    const tracks = yield services.getRandomTracks();
    if (tracks)
      yield put(actions.getRandomTracksSuccess({ playlist: tracks.items }));
  } catch (err) {
    yield put(actions.getRandomTracksFailure({ error: err.message }));
  }
}

function* getRandomTracksSaga() {
  yield takeLatest(constants.GET_RANDOM_TRACKS_START, getRandomTracks);
}

// createPlaylist
function* createPlaylist({ payload: { userId, name } }) {
  try {
    const playlist = yield services.createPlaylist(userId, name);
    if (playlist) {
      yield put(actions.createPlaylistSuccess({ playlist }));
      yield getUserPlaylists();
    }
  } catch (err) {
    yield put(actions.createPlaylistFailure({ error: err.message }));
  }
}

function* createPlaylistSaga() {
  yield takeLatest(constants.CREATE_PLAYLIST_START, createPlaylist);
}

// addTrackToPlaylist
function* addTrackToPlaylist({ payload: { playlistId, tracks } }) {
  try {
    const playlist = yield services.addTrackToPlaylist(playlistId, tracks);
    if (playlist) yield put(actions.addTrackToPlaylistSuccess({ playlist }));
  } catch (err) {
    yield put(actions.addTrackToPlaylistFailure({ error: err.message }));
  }
}

function* addTrackToPlaylistSaga() {
  yield takeLatest(constants.ADD_TRACK_TO_PLAYLIST_START, addTrackToPlaylist);
}

// Check user
function* checkUserFollowThePlaylist({ payload: { playlistId, userId } }) {
  try {
    const following = yield services.checkUserFollowPlaylist(
      playlistId,
      userId
    );
    if (following)
      yield put(
        actions.checkUserFollowPlaylistSuccess({ following: following[0] })
      );
  } catch (err) {
    yield put(actions.checkUserFollowPlaylistFailure({ error: err.message }));
  }
}

function* checkUserFollowThePlaylistSaga() {
  yield takeLatest(
    constants.CHECK_USER_FOLLOW_PLAYLIST_START,
    checkUserFollowThePlaylist
  );
}

export default function* playlistsSaga() {
  yield all([
    fork(getUserPlaylistsSaga),
    fork(getPlaylistSaga),
    fork(getUserTracksSaga),
    fork(getRandomTracksSaga),
    fork(createPlaylistSaga),
    fork(addTrackToPlaylistSaga),
    fork(checkUserFollowThePlaylistSaga)
  ]);
}
