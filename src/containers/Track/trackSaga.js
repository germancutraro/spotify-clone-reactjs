import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './trackConstants';
import * as actions from './trackActions';

function* startSong({ payload: { song } }) {
  try {
    yield put(actions.setSong({ song }));
  } catch (err) {
    console.log(err);
  }
}

function* startSongSaga() {
  yield takeLatest(constants.PLAY_SONG, startSong);
}

export default function* trackSaga() {
  yield all([fork(startSongSaga)]);
}
