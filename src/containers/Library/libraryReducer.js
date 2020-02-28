import * as constants from './libraryConstants';

const initialState = {
  artists: [],
  albums: [],
  madeForYou: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_TOP_ARTISTS_START:
      return { ...state, loading: true, error: null };

    case constants.GET_TOP_ARTISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        artists: payload.artists
      };

    case constants.GET_TOP_ARTISTS_FAILURE:
      return { ...state, loading: false, artists: [], error: payload.error };

    default:
      return state;
  }
};
