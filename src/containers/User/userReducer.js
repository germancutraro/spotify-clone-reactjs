import * as constants from './userConstants';

const initialState = {
  user: {},
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USER_START:
    case constants.GET_USER_PLAYLISTS_START:
      return { ...state, user: {}, loading: true, error: null };
    case constants.GET_USER_SUCCESS:
      return { ...state, user: payload.user, loading: false, error: null };
    case constants.GET_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        user: { ...state.user, playlists: payload.playlists },
        loading: false,
        error: null
      };
    case constants.GET_USER_FAILURE:
    case constants.GET_USER_PLAYLISTS_FAILURE:
      return { ...state, user: {}, loading: false, error: null };
    default:
      return state;
  }
};
