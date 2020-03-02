import * as constants from './searchConstants';

const initialState = {
  list: [],
  artist: [],
  searchValue: '',
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_SEARCH_START:
    case constants.GET_ARTIST_ALBUMS_START:
    case constants.GET_ARTIST_SONGS_START:
    case constants.GET_RELATED_ARTISTS_START:
      return { ...state, loading: true, error: null };

    case constants.GET_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: payload.results
      };

    case constants.GET_ARTIST_ALBUMS_SUCCESS:
    case constants.GET_ARTIST_SONGS_SUCCESS:
    case constants.GET_RELATED_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        artist: payload.data
      };

    case constants.SET_SEARCH_VALUE:
      return { ...state, searchValue: payload.query };

    case constants.GET_SEARCH_FAILURE:
      return { ...state, loading: false, list: [], error: payload.error };

    case constants.GET_ARTIST_ALBUMS_FAILURE:
    case constants.GET_ARTIST_SONGS_FAILURE:
    case constants.GET_RELATED_ARTISTS_FAILURE:
      return { ...state, loading: false, artist: [], error: payload.error };

    default:
      return state;
  }
};
