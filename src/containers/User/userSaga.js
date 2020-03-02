import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './userConstants';
import * as actions from './userActions';
import * as services from './userServices';

// Get user
function* getUser({ payload: { id } }) {
  try {
    const user = yield services.getUser(id);
    if (user) yield put(actions.getUserSuccess({ user }));
  } catch (err) {
    yield put(actions.getUserFailure({ error: err.message }));
  }
}

function* getUserSaga() {
  yield takeLatest(constants.GET_USER_START, getUser);
}

// Get user playlists
function* getUserPlaylists({ payload: { id } }) {
  try {
    const { items: playlists } = yield services.getUserPlaylists(id);
    if (playlists) yield put(actions.getUserPlaylistsSuccess({ playlists }));
  } catch (err) {
    yield put(actions.getUserPlaylistsFailure({ error: err.message }));
  }
}

function* getUserPlaylistsSaga() {
  yield takeLatest(constants.GET_USER_PLAYLISTS_START, getUserPlaylists);
}

export default function* userSaga() {
  yield all([fork(getUserSaga), fork(getUserPlaylistsSaga)]);
}
