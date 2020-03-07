import * as constants from './dashboardConstants';

const initialState = {
  played: [],
  recommendations: [],
  featured: [],
  releases: [],
  loading: true,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_NEW_RELEASES_START:
    case constants.GET_FEATURED_PLAYLISTS_START:
    case constants.GET_RECOMMENDATIONS_START:
    case constants.GET_RECENTLY_PLAYED_START:
      return { ...state, loading: true, error: null };

    case constants.GET_FEATURED_PLAYLISTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        featured: payload.featured
      };
    case constants.GET_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        releases: payload.releases
      };
    case constants.GET_RECENTLY_PLAYED_SUCCESS:
      return { ...state, loading: false, error: null, played: payload.played };
    case constants.GET_RECOMMENDATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        recommendations: payload.recommendations
      };

    case constants.GET_NEW_RELEASES_FAILURE:
    case constants.GET_FEATURED_PLAYLISTS_FAILURE:
    case constants.GET_RECOMMENDATIONS_FAILURE:
    case constants.GET_RECENTLY_PLAYED_FAILURE:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};
