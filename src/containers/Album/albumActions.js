import * as constants from './albumConstants';

export const getAlbumStart = payload => ({
  type: constants.GET_ALBUM_START,
  payload
});

export const getAlbumSuccess = payload => ({
  type: constants.GET_ALBUM_SUCCESS,
  payload
});

export const getAlbumFailure = payload => ({
  type: constants.GET_ALBUM_FAILURE,
  payload
});
