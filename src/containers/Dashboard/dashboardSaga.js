import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './dashboardConstants';
import * as actions from './dashboardActions';
import * as services from './dashboardServices';

// Recently Played
function* getRecentlyPlayed() {
  try {
    const response = yield services.getRecentlyPlayed();
    if (response)
      yield put(actions.getRecentlyPlayedSuccess({ played: response.items }));
  } catch (err) {
    yield put(actions.getRecentlyPlayedFailure({ error: err.message }));
  }
}

function* getRecentlyPlayedSaga() {
  yield takeLatest(constants.GET_RECENTLY_PLAYED_START, getRecentlyPlayed);
}

// Recommendations
function* getRecommendations() {
  try {
    const country = yield services.getRecommendations(1, 2, 'country');

    const classical = yield services.getRecommendations(1, 2, 'classical');

    if (country && classical)
      yield put(
        actions.getRecommendationsSuccess({
          recommendations: {
            country: [...country.tracks],
            classical: [...classical.tracks]
          }
        })
      );
  } catch (err) {
    yield put(actions.getRecommendationsFailure({ error: err.message }));
  }
}

function* getRecommendationsSaga() {
  yield takeLatest(constants.GET_RECOMMENDATIONS_START, getRecommendations);
}

// Featured
function* getFeatured() {
  try {
    const response = yield services.getFeaturedPlaylists();
    if (response)
      yield put(
        actions.getFeaturedPlaylistsSuccess({
          featured: response.playlists.items
        })
      );
  } catch (err) {
    yield put(actions.getFeaturedPlaylistsFailure({ error: err.message }));
  }
}

function* getFeaturedSaga() {
  yield takeLatest(constants.GET_FEATURED_PLAYLISTS_START, getFeatured);
}

// New Releases
// Featured
function* getNewReleases() {
  try {
    const response = yield services.getNewReleases(1, 2, 'country');

    if (response)
      yield put(
        actions.getNewReleasesSuccess({ releases: response.albums.items })
      );
  } catch (err) {
    yield put(actions.getNewReleasesFailure({ error: err.message }));
  }
}

function* getNewReleasesSaga() {
  yield takeLatest(constants.GET_NEW_RELEASES_START, getNewReleases);
}

export default function* dashboardSaga() {
  yield all([
    fork(getRecentlyPlayedSaga),
    fork(getRecommendationsSaga),
    fork(getFeaturedSaga),
    fork(getNewReleasesSaga)
  ]);
}
