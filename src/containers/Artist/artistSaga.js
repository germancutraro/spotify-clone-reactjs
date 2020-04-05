import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './artistConstants';
import * as actions from './artistActions';
import * as services from './artistServices';

function* getArtist({ payload: { id } }) {
  try {
    const artist = yield services.getArtist(id);
    if (artist) yield put(actions.getArtistSuccess({ artist }));
  } catch (err) {
    yield put(actions.getArtistFailure({ error: err.message }));
  }
}

function* getArtistSaga() {
  yield takeLatest(constants.GET_ARTIST_START, getArtist);
}

// Get artist Tracks
function* getArtistTopTracks({ payload: { id } }) {
  try {
    const { tracks } = yield services.getArtistTracks(id);
    if (tracks) yield put(actions.getArtistTracksSuccess({ tracks }));
  } catch (err) {
    yield put(actions.getArtistTracksFailure({ error: err.message }));
  }
}

function* getArtistTopTracksSaga() {
  yield takeLatest(constants.GET_ARTIST_TRACKS_START, getArtistTopTracks);
}

// Get Artist Albums
function* getArtistAlbums({ payload: { id } }) {
  try {
    const albums = yield services.getArtistAlbums(id);
    if (albums)
      yield put(actions.getArtistAlbumsSuccess({ albums: albums.items }));
  } catch (err) {
    yield put(actions.getArtistAlbumsFailure({ error: err.message }));
  }
}

function* getArtistAlbumsSaga() {
  yield takeLatest(constants.GET_ARTIST_ALBUMS_START, getArtistAlbums);
}

// Get Artist Related
function* getArtistRelated({ payload: { id } }) {
  try {
    const { artists } = yield services.getArtistsRelated(id);
    if (artists)
      yield put(actions.getArtistRelatedSuccess({ related: artists }));
  } catch (err) {
    yield put(actions.getArtistRelatedFailure({ error: err.message }));
  }
}

function* getArtistRelatedSaga() {
  yield takeLatest(constants.GET_ARTIST_RELATED_START, getArtistRelated);
}

// Check if the user is following the artist
function* checkFollow({ payload: { id } }) {
  try {
    const isFollowing = yield services.isUserFollowing(id);
    if (isFollowing)
      yield put(actions.isUserFollowingSuccess({ following: isFollowing[0] }));
  } catch (err) {
    yield put(actions.isUserFollowingFailure({ error: err.message }));
  }
}

function* checkFollowSaga() {
  yield takeLatest(constants.IS_USER_FOLLOWING_START, checkFollow);
}

// Follow / UnFollow
function* followUnfollow({ payload: { id, action = 'follow' } }) {
  try {
    yield services.followUnfollow(id, action);

    yield put(actions.followArtistSuccess());
    yield checkFollow({ payload: { id } });
  } catch (err) {
    yield put(actions.followArtistFailure({ error: err.message }));
  }
}

function* followUnfollowSaga() {
  yield takeLatest(constants.FOLLOW_ARTIST_START, followUnfollow);
}

export default function* artistSaga() {
  yield all([
    fork(getArtistSaga),
    fork(getArtistTopTracksSaga),
    fork(getArtistAlbumsSaga),
    fork(getArtistRelatedSaga),
    fork(checkFollowSaga),
    fork(followUnfollowSaga),
  ]);
}
