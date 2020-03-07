import * as constants from './dashboardConstants';

export const getRecentlyPlayedStart = () => ({
  type: constants.GET_RECENTLY_PLAYED_START
});

export const getRecentlyPlayedSuccess = payload => ({
  type: constants.GET_RECENTLY_PLAYED_SUCCESS,
  payload
});

export const getRecentlyPlayedFailure = payload => ({
  type: constants.GET_RECENTLY_PLAYED_FAILURE,
  payload
});

export const getRecommendationsStart = payload => ({
  type: constants.GET_RECOMMENDATIONS_START,
  payload
});

export const getRecommendationsSuccess = payload => ({
  type: constants.GET_RECOMMENDATIONS_SUCCESS,
  payload
});

export const getRecommendationsFailure = payload => ({
  type: constants.GET_RECOMMENDATIONS_FAILURE,
  payload
});

export const getFeaturedPlaylistsStart = payload => ({
  type: constants.GET_FEATURED_PLAYLISTS_START,
  payload
});

export const getFeaturedPlaylistsSuccess = payload => ({
  type: constants.GET_FEATURED_PLAYLISTS_SUCCESS,
  payload
});

export const getFeaturedPlaylistsFailure = payload => ({
  type: constants.GET_FEATURED_PLAYLISTS_FAILURE,
  payload
});

export const getNewReleasesStart = payload => ({
  type: constants.GET_NEW_RELEASES_START,
  payload
});

export const getNewReleasesSuccess = payload => ({
  type: constants.GET_NEW_RELEASES_SUCCESS,
  payload
});

export const getNewReleasesFailure = payload => ({
  type: constants.GET_NEW_RELEASES_FAILURE,
  payload
});
