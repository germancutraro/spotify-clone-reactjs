import * as constants from './searchConstants';

export const searchStart = payload => ({
  type: constants.GET_SEARCH_START,
  payload
});

export const searchSuccess = payload => ({
  type: constants.GET_SEARCH_SUCCESS,
  payload
});

export const searchFailure = payload => ({
  type: constants.GET_SEARCH_FAILURE,
  payload
});

// set search value
export const setSearchValue = payload => ({
  type: constants.SET_SEARCH_VALUE,
  payload
});
