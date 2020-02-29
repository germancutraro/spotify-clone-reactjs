import * as constants from './searchConstants';

export const searchStart = () => ({
  type: constants.GET_SEARCH_START
});

export const searchSuccess = payload => ({
  type: constants.GET_SEARCH_SUCCESS,
  payload
});

export const searchFailure = payload => ({
  type: constants.GET_SEARCH_FAILURE,
  payload
});
