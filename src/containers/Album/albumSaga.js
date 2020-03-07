import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './albumConstants';
import * as actions from './albumActions';
import * as services from './albumServices';

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

export default function* albumSaga() {
  yield all([fork(getAlbumSaga)]);
}
