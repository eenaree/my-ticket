import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSnackBarStore } from '~/store';
import { styles } from './styles';

export default function SnackBar() {
  const message = useSnackBarStore(state => state.message);
  const clearSnackBar = useSnackBarStore(state => state.clearSnackBar);

  useEffect(() => {
    const timeoutId = window.setTimeout(clearSnackBar, 3200);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [message, clearSnackBar]);

  return createPortal(
    <div key={Math.random()} css={styles.snackbar(!!message)}>
      {message && <div>{message.message}</div>}
    </div>,
    document.body
  );
}
