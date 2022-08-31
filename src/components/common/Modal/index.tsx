import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

export default function Modal({
  children,
  modal,
}: React.PropsWithChildren<Props>) {
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLElement>();
  const setModalRef: React.RefCallback<HTMLElement> = element => {
    if (element) {
      modalRef.current = element;
    }
  };
  const modalDispatch = useModalDispatch();

  useEffect(() => {
    let timeout: number;

    if (modal && !isMounted) {
      setIsMounted(true);
      return;
    }
    if (!modal && isMounted) {
      timeout = window.setTimeout(() => {
        setIsMounted(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [modal, isMounted]);

  useEffect(() => {
    function onClickElementOutside(e: MouseEvent) {
      if (
        modalRef.current &&
        e.target instanceof HTMLElement &&
        !modalRef.current.contains(e.target)
      ) {
        modalDispatch({ type: 'CLOSE_MODAL' });
      }
    }

    if (isMounted) {
      window.addEventListener('click', onClickElementOutside);
    }

    return () => {
      window.removeEventListener('click', onClickElementOutside);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return createPortal(
    <div css={styles.modalOverlay(modal)}>
      <div css={styles.modalContainer(modal)} ref={setModalRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
