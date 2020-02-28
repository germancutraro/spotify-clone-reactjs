import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import playlistsSaga from './containers/Playlists/playlistsSaga';
import browseSaga from './containers/Search/searchSaga';
import librarySaga from './containers/Library/librarySaga';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(playlistsSaga),
    fork(browseSaga),
    fork(librarySaga)
  ]);
}
