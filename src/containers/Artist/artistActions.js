import * as constants from './artistConstants';

export const getArtistStart = payload => ({
  type: constants.GET_ARTIST_START,
  payload
});

export const getArtistSuccess = payload => ({
  type: constants.GET_ARTIST_SUCCESS,
  payload
});

export const getArtistFailure = payload => ({
  type: constants.GET_ARTIST_FAILURE,
  payload
});
