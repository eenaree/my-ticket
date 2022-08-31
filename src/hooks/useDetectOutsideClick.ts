import { useEffect } from 'react';
import useElement from './useElement';

export default function useDetectOutsideClick(
  active: boolean,
  inactiveFn: () => void
) {
  const [elementRef, setElementRef] = useElement();

  useEffect(() => {
    function onClickElementOutside(e: MouseEvent) {
      if (
        elementRef.current &&
        e.target instanceof HTMLElement &&
        !elementRef.current.contains(e.target)
      ) {
        inactiveFn();
      }
    }

    if (active) {
      window.addEventListener('click', onClickElementOutside);
    }

    return () => {
      window.removeEventListener('click', onClickElementOutside);
    };
  }, [active, inactiveFn]);

  return setElementRef;
}
