import * as constants from './searchConstants';

const initialState = {
  list: [],
  searchValue: '',
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_SEARCH_START:
      return { ...state, loading: true, error: null };

    case constants.GET_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: payload.results
      };
    case constants.SET_SEARCH_VALUE:
      return { ...state, searchValue: payload.query };

    case constants.GET_SEARCH_FAILURE:
      return { ...state, loading: false, list: [], error: payload.error };

    default:
      return state;
  }
};
