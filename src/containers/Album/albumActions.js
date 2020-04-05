import * as constants from './albumConstants';

export const getAlbumStart = payload => ({
  type: constants.GET_ALBUM_START,
  payload,
});

export const getAlbumSuccess = payload => ({
  type: constants.GET_ALBUM_SUCCESS,
  payload,
});

export const getAlbumFailure = payload => ({
  type: constants.GET_ALBUM_FAILURE,
  payload,
});

export const saveAlbumStart = payload => ({
  type: constants.SAVE_ALBUM_START,
  payload,
});

export const saveAlbumSuccess = payload => ({
  type: constants.SAVE_ALBUM_SUCCESS,
  payload,
});

export const saveAlbumFailure = payload => ({
  type: constants.SAVE_ALBUM_FAILURE,
  payload,
});

export const removeAlbumStart = payload => ({
  type: constants.REMOVE_ALBUM_START,
  payload,
});

export const removeAlbumSuccess = payload => ({
  type: constants.REMOVE_ALBUM_SUCCESS,
  payload,
});

export const removeAlbumFailure = payload => ({
  type: constants.REMOVE_ALBUM_FAILURE,
  payload,
});
