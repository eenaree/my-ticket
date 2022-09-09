import { useEffect, useRef } from 'react';
import { login } from '@services/auth';

export default function Authenticated() {
  const windowOpenerRef = useRef<Window | null>(window.opener);

  useEffect(() => {
    login()
      .then(res => {
        if (res.data.success && windowOpenerRef.current) {
          windowOpenerRef.current.postMessage(
            { authenticated: true, user: res.data.user },
            {
              targetOrigin: window.location.origin,
            }
          );
        }
      })
      .catch(error => {
        if (windowOpenerRef.current) {
          windowOpenerRef.current.postMessage(
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
