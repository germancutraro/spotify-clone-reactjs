import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './albumConstants';
import * as actions from './albumActions';
import * as services from './albumServices';

import { getAlbumsStart } from '../Library/libraryActions';

function* getAlbum({ payload: { id } }) {
  try {
    const album = yield services.getAlbum(id);
    if (album) yield put(actions.getAlbumSuccess({ album }));
  } catch (err) {
    yield put(actions.getAlbumFailure({ error: err.message }));
  }
}

function* getAlbumSaga() {
  yield takeLatest(constants.GET_ALBUM_START, getAlbum);
}

// Save Album
function* saveAlbum({ payload: { id } }) {
  try {
    yield services.saveAlbum(id);
    yield put(getAlbumsStart());
  } catch (err) {
    yield put(actions.saveAlbumFailure({ error: err.message }));
  }
}

function* saveAlbumSaga() {
  yield takeLatest(constants.SAVE_ALBUM_START, saveAlbum);
}

function* removeAlbum({ payload: { id } }) {
  try {
    yield services.removeAlbum(id);
    yield put(getAlbumsStart());
  } catch (err) {
    yield put(actions.removeAlbumFailure({ error: err.message }));
  }
}

function* removeAlbumSaga() {
  yield takeLatest(constants.REMOVE_ALBUM_START, removeAlbum);
}

export default function* albumSaga() {
  yield all([fork(getAlbumSaga), fork(saveAlbumSaga), fork(removeAlbumSaga)]);
}
