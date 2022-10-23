import { useEffect, useRef } from 'react';
import useElement from './useElement';

export default function useElementRect() {
  const [elementRef, setElementRef] = useElement();
  const rectRef = useRef<DOMRect>();

  useEffect(() => {
    if (elementRef.current) {
      rectRef.current = elementRef.current.getBoundingClientRect();
    }
  });

  return [rectRef, setElementRef] as const;
}
