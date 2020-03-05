import * as constants from './artistConstants';

const initialState = {
  artist: {},
  tracks: [],
  albums: [],
  related: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_ARTIST_START:
    case constants.GET_ARTIST_ALBUMS_START:
    case constants.GET_ARTIST_TRACKS_START:
    case constants.GET_ARTIST_RELATED_START:
      return { ...state, loading: true, error: null };

    case constants.GET_ARTIST_SUCCESS:
      return { ...state, loading: false, artist: payload.artist };
    case constants.GET_ARTIST_TRACKS_SUCCESS:
      return { ...state, loading: false, tracks: payload.tracks };
    case constants.GET_ARTIST_ALBUMS_SUCCESS:
      return { ...state, loading: false, albums: payload.albums };
    case constants.GET_ARTIST_RELATED_SUCCESS:
      return { ...state, loading: false, related: payload.artists };

    case constants.GET_ARTIST_FAILURE:
    case constants.GET_ARTIST_TRACKS_FAILURE:
    case constants.GET_ARTIST_ALBUMS_FAILURE:
    case constants.GET_ARTIST_RELATED_FAILURE:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};
