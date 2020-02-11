import * as constants from './playlistsConstants';

export const getUserPlaylistsStart = () => ({
  type: constants.GET_USER_PLAYLISTS_START
});

export const getUserPlaylistsSuccess = payload => ({
  type: constants.GET_USER_PLAYLISTS_SUCCESS,
  payload
});

export const getUserPlaylistsFailure = payload => ({
  type: constants.GET_USER_PLAYLISTS_FAILURE,
  payload
});
