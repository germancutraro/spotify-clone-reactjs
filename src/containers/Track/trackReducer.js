import * as constants from './trackConstants';

const initialState = {
  song: {},
  audio: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_SONG:
      return { ...state, audio: payload.audio };
    case constants.PAUSE_SONG:
      state.audio.pause();
      return { ...state };
    default:
      return state;
  }
};
