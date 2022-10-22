import * as React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useDelayUnmount from '~/hooks/useDelayUnmount';
import useElement from '~/hooks/useElement';
import { useModalStore } from '~/store';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

export default function Modal({
  children,
  modal,
}: React.PropsWithChildren<Props>) {
  const closeModal = useModalStore(state => state.closeModal);
  const isMounted = useDelayUnmount(modal);
  const [modalRef, setModalRef] = useElement();
  const scrollBarWidth = useRef(window.innerWidth - document.body.clientWidth);

  function onClickOverlay(e: React.MouseEvent) {
    if (modalRef.current && e.target instanceof HTMLElement) {
      if (e.target.contains(modalRef.current)) {
        closeModal();
      }
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  useEffect(() => {
    const scrollable = window.innerHeight !== document.body.scrollHeight;

    if (isMounted) {
      document.body.style.overflow = 'hidden';
      if (scrollable) {
        document.body.style.paddingRight = `${scrollBarWidth.current}px`;
      }
    } else {
      document.body.style.overflow = 'visible';
      document.body.style.paddingRight = '0px';
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return createPortal(
    <div
      css={styles.modalOverlay(modal)}
      onClick={onClickOverlay}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <div css={styles.modalDialog(modal)} ref={setModalRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
