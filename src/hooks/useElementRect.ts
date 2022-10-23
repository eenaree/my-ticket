import { useRef } from 'react';

export default function useElementRect() {
  const rectRef = useRef<DOMRect>();
  const setRectRef: React.RefCallback<HTMLElement> = element => {
    if (element) {
      rectRef.current = element.getBoundingClientRect();
    }
  };

  return [rectRef, setRectRef] as const;
}
