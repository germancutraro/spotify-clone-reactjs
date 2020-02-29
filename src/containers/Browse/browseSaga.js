import { all, fork, put, takeLatest } from 'redux-saga/effects';

import * as constants from './browseConstants';
import * as actions from './browseActions';
import * as services from './browseServices';

function* getBrowseCategories() {
  try {
    const browse = yield services.getBrowse();
    if (browse)
      yield put(actions.getBrowseSuccess({ browse: browse.categories.items }));
  } catch (err) {
    yield put(actions.getBrowseFailure({ error: err.message }));
  }
}

function* getBrowseCategoriesSaga() {
  yield takeLatest(constants.GET_BROWSE_START, getBrowseCategories);
}

// New Releases
function* getNewReleases() {
  try {
    const releases = yield services.getReleases();
    if (releases)
      yield put(
        actions.getReleasesSuccess({ releases: releases.albums.items })
      );
  } catch (err) {
    yield put(actions.getReleasesFailure({ error: err.message }));
  }
}

function* getNewReleasesSaga() {
  yield takeLatest(constants.GET_RELEASES_START, getNewReleases);
}

export default function* browseSaga() {
  yield all([fork(getBrowseCategoriesSaga), fork(getNewReleasesSaga)]);
}
