import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from '@components/common/Button';
import Login from '@components/Login';
import { useModal, useModalDispatch } from '@context/ModalContext';
import { logout } from '@services/auth';
import { useUserStore } from '@store/.';
import { User } from '@typings/db';
import { styles } from './styles';

export default function Header() {
  const modal = useModal();
  const modalDispatch = useModalDispatch();
  const { user, setUser } = useUserStore(state => ({
    user: state.user,
    setUser: state.setUser,
  }));

  function onClickLogin(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement) {
      if (e.target.dataset.modal) {
        modalDispatch({ type: 'OPEN_MODAL', name: e.target.dataset.modal });
      }
    }
  }

  function onClickLogout() {
    logout()
      .then(res => {
        if (res.data.success) {
          setUser(null);
        }
      })
      .catch(error => {
        window.alert('로그아웃 처리에 실패했습니다.');
        console.error(error);
      });
  }

  function successLogin(user: User) {
    setUser(user);
    modalDispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <header>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        {user ? (
          <Button onClick={onClickLogout}>로그아웃</Button>
        ) : (
          <Button onClick={onClickLogin} data-modal="login">
            로그인
          </Button>
        )}
        <Login modal={modal === 'login'} onSuccess={successLogin} />
      </div>
    </header>
  );
}
