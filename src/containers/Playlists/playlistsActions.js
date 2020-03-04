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

// Tracks
export const getUserTracksStart = payload => ({
  type: constants.GET_USER_TRACKS_START,
  payload
});

export const getUserTracksSuccess = payload => ({
  type: constants.GET_USER_TRACKS_SUCCESS,
  payload
});

export const getUserTracksFailure = payload => ({
  type: constants.GET_USER_TRACKS_FAILURE,
  payload
});

export const getRandomTracksStart = payload => ({
  type: constants.GET_RANDOM_TRACKS_START,
  payload
});

export const getRandomTracksSuccess = payload => ({
  type: constants.GET_RANDOM_TRACKS_SUCCESS,
  payload
});

export const getRandomTracksFailure = payload => ({
  type: constants.GET_RANDOM_TRACKS_FAILURE,
  payload
});

export const createPlaylistStart = payload => ({
  type: constants.CREATE_PLAYLIST_START,
  payload
});

export const createPlaylistSuccess = payload => ({
  type: constants.CREATE_PLAYLIST_SUCCESS,
  payload
});

export const createPlaylistFailure = payload => ({
  type: constants.CREATE_PLAYLIST_FAILURE,
  payload
});

export const addTrackToPlaylistStart = payload => ({
  type: constants.ADD_TRACK_TO_PLAYLIST_START,
  payload
});

export const addTrackToPlaylistSuccess = payload => ({
  type: constants.ADD_TRACK_TO_PLAYLIST_SUCCESS,
  payload
});

export const addTrackToPlaylistFailure = payload => ({
  type: constants.ADD_TRACK_TO_PLAYLIST_FAILURE,
  payload
});
