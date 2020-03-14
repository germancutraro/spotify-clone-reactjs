import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './trackConstants';
import * as actions from './trackActions';

function* startSong({ payload: { song } }) {
  try {
    const audio = yield new Audio(song.preview_url);
    yield audio.play();
    yield put(actions.setSong({ audio, song }));
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
