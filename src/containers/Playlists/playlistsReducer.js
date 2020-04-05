import * as constants from './playlistsConstants';

const initialState = {
  list: [],
  playlist: {},
  tracks: [],
  randomTracks: [],
  following: false,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USER_PLAYLISTS_START:
    case constants.GET_PLAYLIST_START:
    case constants.GET_USER_TRACKS_START:
    case constants.GET_RANDOM_TRACKS_START:
    case constants.CREATE_PLAYLIST_START:
    case constants.ADD_TRACK_TO_PLAYLIST_START:
      return { ...state, loading: true, error: null };

    case constants.GET_USER_PLAYLISTS_SUCCESS:
      return { ...state, loading: false, error: null, list: payload.playlists };
    case constants.GET_PLAYLIST_SUCCESS:
    case constants.GET_USER_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        playlist: payload.playlist,
      };

    case constants.GET_RANDOM_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        randomTracks: payload.tracks,
      };

    case constants.CHECK_USER_FOLLOW_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        following: payload.following,
      };

    case constants.ADD_TRACK_TO_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case constants.GET_USER_PLAYLISTS_FAILURE:
    case constants.GET_PLAYLIST_FAILURE:
    case constants.GET_USER_TRACKS_FAILURE:
    case constants.GET_RANDOM_TRACKS_FAILURE:
    case constants.ADD_TRACK_TO_PLAYLIST_FAILURE:
    case constants.CHECK_USER_FOLLOW_PLAYLIST_FAILURE:
    case constants.FOLLOW_PLAYLIST_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};
