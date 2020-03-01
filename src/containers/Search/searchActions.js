import * as constants from './searchConstants';

export const searchStart = payload => ({
  type: constants.GET_SEARCH_START,
  payload
});

export const searchSuccess = payload => ({
  type: constants.GET_SEARCH_SUCCESS,
  payload
});

export const searchFailure = payload => ({
  type: constants.GET_SEARCH_FAILURE,
  payload
});

// See all

export const getArtistSongsStart = payload => ({
  type: constants.GET_ARTIST_SONGS_START,
  payload
});

export const getArtistSongsSuccess = payload => ({
  type: constants.GET_ARTIST_SONGS_SUCCESS,
  payload
});

export const getArtistSongsFailure = payload => ({
  type: constants.GET_ARTIST_SONGS_FAILURE,
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

export const getRelatedArtistsStart = payload => ({
  type: constants.GET_RELATED_ARTISTS_START,
  payload
});

export const getRelatedArtistsSuccess = payload => ({
  type: constants.GET_RELATED_ARTISTS_SUCCESS,
  payload
});

export const getRelatedArtistsFailure = payload => ({
  type: constants.GET_RELATED_ARTISTS_FAILURE,
  payload
});

// set search value
export const setSearchValue = payload => ({
  type: constants.SET_SEARCH_VALUE,
  payload
});
