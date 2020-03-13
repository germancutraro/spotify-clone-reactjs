import { enqueueSnackbar } from '../containers/Notifier/notifierActions';

export const renderSnackbar = (variant = 'error', message) =>
  enqueueSnackbar({
    message,
    options: {
      variant,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    }
  });
