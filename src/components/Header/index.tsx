import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/common/Button';
import Login from '@components/Login';
import { useModal, useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

export default function Header() {
  const modal = useModal();
  const modalDispatch = useModalDispatch();

  function onClickLogin(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement) {
      if (e.target.dataset.modal) {
        modalDispatch({ type: 'OPEN_MODAL', name: e.target.dataset.modal });
      }
    }
  }

  return (
    <header>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        <Button onClick={onClickLogin} data-modal="login">
          로그인
        </Button>
        <Login modal={modal === 'login'} />
      </div>
    </header>
  );
}
