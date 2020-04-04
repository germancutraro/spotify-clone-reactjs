import * as constants from './artistConstants';

export const getArtistStart = (payload) => ({
  type: constants.GET_ARTIST_START,
  payload,
});

export const getArtistSuccess = (payload) => ({
  type: constants.GET_ARTIST_SUCCESS,
  payload,
});

export const getArtistFailure = (payload) => ({
  type: constants.GET_ARTIST_FAILURE,
  payload,
});

export const getArtistTracksStart = (payload) => ({
  type: constants.GET_ARTIST_TRACKS_START,
  payload,
});

export const getArtistTracksSuccess = (payload) => ({
  type: constants.GET_ARTIST_TRACKS_SUCCESS,
  payload,
});

export const getArtistTracksFailure = (payload) => ({
  type: constants.GET_ARTIST_TRACKS_FAILURE,
  payload,
});

export const getArtistAlbumsStart = (payload) => ({
  type: constants.GET_ARTIST_ALBUMS_START,
  payload,
});

export const getArtistAlbumsSuccess = (payload) => ({
  type: constants.GET_ARTIST_ALBUMS_SUCCESS,
  payload,
});

export const getArtistAlbumsFailure = (payload) => ({
  type: constants.GET_ARTIST_ALBUMS_FAILURE,
  payload,
});

export const getArtistRelatedStart = (payload) => ({
  type: constants.GET_ARTIST_RELATED_START,
  payload,
});

export const getArtistRelatedSuccess = (payload) => ({
  type: constants.GET_ARTIST_RELATED_SUCCESS,
  payload,
});

export const getArtistRelatedFailure = (payload) => ({
  type: constants.GET_ARTIST_RELATED_FAILURE,
  payload,
});

// check if user follow the artist
export const isUserFollowingStart = (payload) => ({
  type: constants.IS_USER_FOLLOWING_START,
  payload,
});

export const isUserFollowingSuccess = (payload) => ({
  type: constants.IS_USER_FOLLOWING_SUCCESS,
  payload,
});

export const isUserFollowingFailure = (payload) => ({
  type: constants.IS_USER_FOLLOWING_FAILURE,
  payload,
});
// Follow / Unfollow

export const followArtistStart = (payload) => ({
  type: constants.FOLLOW_ARTIST_START,
  payload,
});

export const followArtistSuccess = (payload) => ({
  type: constants.FOLLOW_ARTIST_SUCCESS,
  payload,
});

export const followArtistFailure = (payload) => ({
  type: constants.FOLLOW_ARTIST_FAILURE,
  payload,
});
