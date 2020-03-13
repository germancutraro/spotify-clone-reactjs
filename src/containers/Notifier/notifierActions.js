import * as notifierConstants from './notifierConstants';

export const enqueueSnackbar = notification => ({
  type: notifierConstants.ENQUEUE_SNACKBAR,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification
  }
});

export const removeSnackbar = key => ({
  type: notifierConstants.REMOVE_SNACKBAR,
  key
});
