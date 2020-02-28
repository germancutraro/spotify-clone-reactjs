import * as constants from './libraryConstants';

export const getTopArtistsStart = () => ({
  type: constants.GET_TOP_ARTISTS_START
});

export const getTopArtistsSuccess = payload => ({
  type: constants.GET_TOP_ARTISTS_SUCCESS,
  payload
});

export const getTopArtistsFailure = payload => ({
  type: constants.GET_TOP_ARTISTS_FAILURE,
  payload
});

// Albums

export const getAlbumsStart = () => ({
  type: constants.GET_ALBUMS_START
});

export const getAlbumsSuccess = payload => ({
  type: constants.GET_ALBUMS_SUCCESS,
  payload
});

export const getAlbumsFailure = payload => ({
  type: constants.GET_ALBUMS_FAILURE,
  payload
});
