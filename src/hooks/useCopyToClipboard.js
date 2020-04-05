import useNotifier from './useNotifier';

function useCopyToClipboard(text = window.location.href) {
  const { showSnackbar } = useNotifier({
    error: false,
    message: 'Enlace copiado en el portapapeles',
  });
  const copyToClipboard = () => {
    if (navigator.clipboard.writeText(text, '')) showSnackbar();
  };

  return { copyToClipboard };
}

export default useCopyToClipboard;
