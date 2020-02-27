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

// Playlist
export const getPlaylistStart = payload => ({
  type: constants.GET_PLAYLIST_START,
  payload
});

export const getPlaylistSuccess = payload => ({
  type: constants.GET_PLAYLIST_SUCCESS,
  payload
});

export const getPlaylistFailure = payload => ({
  type: constants.GET_PLAYLIST_FAILURE,
  payload
});
