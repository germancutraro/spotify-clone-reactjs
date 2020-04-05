import * as constants from './trackConstants';

export const setSong = payload => ({
  type: constants.SET_SONG,
  payload,
});

export const setList = payload => ({
  type: constants.SET_LIST,
  payload,
});

export const startSong = payload => ({
  type: constants.PLAY_SONG,
  payload,
});

export const pauseSong = payload => ({
  type: constants.PAUSE_SONG,
  payload,
});

export const resumeSong = payload => ({
  type: constants.RESUME_SONG,
  payload,
});
