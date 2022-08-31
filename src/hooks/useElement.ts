import { useRef } from 'react';

export default function useElement() {
  const elementRef = useRef<HTMLElement>();
  const setElementRef: React.RefCallback<HTMLElement> = element => {
    if (element) {
      elementRef.current = element;
    }
  };

  return [elementRef, setElementRef] as const;
}
