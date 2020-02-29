import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import playlistsSaga from './containers/Playlists/playlistsSaga';
import librarySaga from './containers/Library/librarySaga';
import searchSaga from './containers/Search/searchSaga';
import browseSaga from './containers/Browse/browseSaga';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(playlistsSaga),
    fork(browseSaga),
    fork(searchSaga),
    fork(librarySaga)
  ]);
}
