import { all, fork } from 'redux-saga/effects';

// sagas
import authSaga from './containers/Auth/authSaga';
import playlistsSaga from './containers/Playlists/playlistsSaga';
import librarySaga from './containers/Library/librarySaga';
import searchSaga from './containers/Search/searchSaga';
import browseSaga from './containers/Browse/browseSaga';
import userSaga from './containers/User/userSaga';
import artistSaga from './containers/Artist/artistSaga';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(playlistsSaga),
    fork(browseSaga),
    fork(searchSaga),
    fork(librarySaga),
    fork(artistSaga)
  ]);
}
