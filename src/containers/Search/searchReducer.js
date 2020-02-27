import * as constants from './searchConstants';

const initialState = {
  browse: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_BROWSE_START:
      return { ...state, loading: true, error: null };

    case constants.GET_BROWSE_SUCCESS:
      return { ...state, loading: false, error: null, browse: payload.browse };

    case constants.GET_BROWSE_FAILURE:
      return { ...state, loading: false, browse: [], error: payload.error };

    default:
      return state;
  }
};
