import * as constants from './playlistsConstants';

const initialState = {
  list: [],
  tracks: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USER_PLAYLISTS_START:
    case constants.GET_PLAYLIST_TRACKS_START:
      return { ...state, loading: true, error: null };

    case constants.GET_USER_PLAYLISTS_SUCCESS:
      return { ...state, loading: false, error: null, list: payload.playlists };
    case constants.GET_PLAYLIST_TRACKS_SUCCESS:
      return { ...state, loading: false, error: null, tracks: payload.tracks };

    case constants.GET_USER_PLAYLISTS_FAILURE:
    case constants.GET_PLAYLIST_TRACKS_FAILURE:
      return { ...state, loading: false, list: [], error: payload.error };

    default:
      return state;
  }
};
