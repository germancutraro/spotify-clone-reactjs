import * as constants from './browseConstants';

export const getBrowseStart = () => ({
  type: constants.GET_BROWSE_START
});

export const getBrowseSuccess = payload => ({
  type: constants.GET_BROWSE_SUCCESS,
  payload
});

export const getBrowseFailure = payload => ({
  type: constants.GET_BROWSE_FAILURE,
  payload
});

// New Releases

export const getReleasesStart = () => ({
  type: constants.GET_RELEASES_START
});

export const getReleasesSuccess = payload => ({
  type: constants.GET_RELEASES_SUCCESS,
  payload
});

export const getReleasesFailure = payload => ({
  type: constants.GET_RELEASES_FAILURE,
  payload
});
