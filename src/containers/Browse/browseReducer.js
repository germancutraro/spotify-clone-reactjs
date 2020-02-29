import * as constants from './browseConstants';

const initialState = {
  list: [],
  releases: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_BROWSE_START:
    case constants.GET_RELEASES_START:
      return { ...state, loading: true, error: null };

    case constants.GET_BROWSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        list: payload.browse
      };

    case constants.GET_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        releases: payload.releases
      };

    case constants.GET_BROWSE_FAILURE:
    case constants.GET_RELEASES_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        releases: [],
        error: payload.error
      };

    default:
      return state;
  }
};
