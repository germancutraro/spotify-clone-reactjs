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

export const getArtistTracksStart = payload => ({
  type: constants.GET_ARTIST_TRACKS_START,
  payload
});

export const getArtistTracksSuccess = payload => ({
  type: constants.GET_ARTIST_TRACKS_SUCCESS,
  payload
});

export const getArtistTracksFailure = payload => ({
  type: constants.GET_ARTIST_TRACKS_FAILURE,
  payload
});

export const getArtistAlbumsStart = payload => ({
  type: constants.GET_ARTIST_ALBUMS_START,
  payload
});

export const getArtistAlbumsSuccess = payload => ({
  type: constants.GET_ARTIST_ALBUMS_SUCCESS,
  payload
});

export const getArtistAlbumsFailure = payload => ({
  type: constants.GET_ARTIST_ALBUMS_FAILURE,
  payload
});

export const getArtistRelatedStart = payload => ({
  type: constants.GET_ARTIST_RELATED_START,
  payload
});

export const getArtistRelatedSuccess = payload => ({
  type: constants.GET_ARTIST_RELATED_SUCCESS,
  payload
});

export const getArtistRelatedFailure = payload => ({
  type: constants.GET_ARTIST_RELATED_FAILURE,
  payload
});
