import * as notifierConstants from './notifierConstants';

const initialState = {
  notifications: []
};

function notifierReducer(state = initialState, action) {
  switch (action.type) {
    case notifierConstants.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification
          }
        ]
      };
    case notifierConstants.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.key !== action.key
        )
      };

    default:
      return state;
  }
}

export default notifierReducer;
