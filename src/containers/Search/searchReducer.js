import * as constants from './searchConstants';

const initialState = {
  browse: [],
  topGenres: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_BROWSE_START:
      return { ...state, loading: true, error: null };

    case constants.GET_BROWSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        browse: payload.browse[1].content.items,
        topGenres: payload.browse[0].content.items
      };

    case constants.GET_BROWSE_FAILURE:
      return { ...state, loading: false, browse: [], error: payload.error };

    default:
      return state;
  }
};
