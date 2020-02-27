import * as constants from './playlistsConstants';

const initialState = {
  list: [],
  playlist: {},
  tracks: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USER_PLAYLISTS_START:
    case constants.GET_PLAYLIST_START:
      return { ...state, loading: true, error: null };

    case constants.GET_USER_PLAYLISTS_SUCCESS:
      return { ...state, loading: false, error: null, list: payload.playlists };
    case constants.GET_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        playlist: payload.playlist
      };

    case constants.GET_USER_PLAYLISTS_FAILURE:
    case constants.GET_PLAYLIST_FAILURE:
      return { ...state, loading: false, list: [], error: payload.error };

    default:
      return state;
  }
};
