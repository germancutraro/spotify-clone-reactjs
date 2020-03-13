import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

let wasDisplayed = false;

function useNotifier({ message, error = true }) {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = () => {
    if (!wasDisplayed) {
      enqueueSnackbar(message, {
        variant: error ? 'error' : 'info',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      });
      wasDisplayed = true;
    }
  };

  useEffect(() => {
    wasDisplayed = false;
  }, []);

  return { showSnackbar };
}

export default useNotifier;
