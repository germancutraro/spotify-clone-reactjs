import * as constants from './artistConstants';

const initialState = {
  artist: {},
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_ARTIST_START:
      return { ...state, loading: true, error: null, artist: {} };
    case constants.GET_ARTIST_SUCCESS:
      return { ...state, loading: false, artist: payload.artist };
    case constants.GET_ARTIST_FAILURE:
      return { ...state, loading: false, error: payload.error, artist: {} };
    default:
      return state;
  }
};
