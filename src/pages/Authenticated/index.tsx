import { useEffect } from 'react';
import { login } from '~/services/auth';

export default function Authenticated() {
  useEffect(() => {
    const windowOpener: Window | null = window.opener;

    login()
      .then(res => {
        if (windowOpener) {
          windowOpener.postMessage(
            { from: 'authentication', user: res.data.user },
            window.location.origin
          );
        }
      })
      .catch(error => {
        if (windowOpener) {
          windowOpener.postMessage(
            { from: 'authentication', user: null },
            window.location.origin
          );
        }
        console.error(error);
      });
  }, []);

  return <></>;
}
