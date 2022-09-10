import { useEffect } from 'react';
import { login } from '@services/auth';

export default function Authenticated() {
  useEffect(() => {
    const windowOpener: Window | null = window.opener;

    login()
      .then(res => {
        if (res.data.success && windowOpener) {
          windowOpener.postMessage(
            { authenticated: true, user: res.data.user },
            {
              targetOrigin: window.location.origin,
            }
          );
        }
      })
      .catch(error => {
        if (windowOpener) {
          windowOpener.postMessage(
            {
              authenticated: false,
              user: null,
            },
            { targetOrigin: window.location.origin }
          );
        }
        console.error(error);
      });
  }, []);

  return <></>;
}
