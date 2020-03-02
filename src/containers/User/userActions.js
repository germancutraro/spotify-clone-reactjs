import * as constants from './userConstants';

export const getUserStart = payload => ({
  type: constants.GET_USER_START,
  payload
});

export const getUserSuccess = payload => ({
  type: constants.GET_USER_SUCCESS,
  payload
});

export const getUserFailure = payload => ({
  type: constants.GET_USER_FAILURE,
  payload
});

// Get user playlists

export const getUserPlaylistsStart = payload => ({
  type: constants.GET_USER_PLAYLISTS_START,
  payload
});

export const getUserPlaylistsSuccess = payload => ({
  type: constants.GET_USER_PLAYLISTS_SUCCESS,
  payload
});

export const getUserPlaylistsFailure = payload => ({
  type: constants.GET_USER_PLAYLISTS_FAILURE,
  payload
});
