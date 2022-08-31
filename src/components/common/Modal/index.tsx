import * as React from 'react';
import { createPortal } from 'react-dom';
import { useModalDispatch } from '@context/ModalContext';
import useDelayUnmount from '@hooks/useDelayUnmount';
import useDetectOutsideClick from '@hooks/useDetectOutsideClick';
import { styles } from './styles';

interface Props {
  modal: boolean;
}

export default function Modal({
  children,
  modal,
}: React.PropsWithChildren<Props>) {
  const modalDispatch = useModalDispatch();
  const isMounted = useDelayUnmount(modal);
  const setModalRef = useDetectOutsideClick(isMounted, closeModal);

  function closeModal() {
    modalDispatch({ type: 'CLOSE_MODAL' });
  }

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
