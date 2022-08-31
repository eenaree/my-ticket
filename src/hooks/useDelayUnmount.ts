import { useEffect, useState } from 'react';

export default function useDelayUnmount(trigger: boolean, delay = 500) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (trigger && !isMounted) {
      setIsMounted(true);
      return;
    }
    if (!trigger && isMounted) {
      timeout = window.setTimeout(() => {
        setIsMounted(false);
      }, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [trigger, isMounted, delay]);

  return isMounted;
}
