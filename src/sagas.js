import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import playlistsSaga from './containers/Playlists/playlistsSaga';

export default function* root() {
  yield all([fork(authSaga), fork(playlistsSaga)]);
}
