import { Link } from 'react-router-dom';
import Button from '@components/common/Button';
import Login from '@components/Login';
import { useModalStore, useUserStore } from '@store/.';
import { User } from '@typings/db';
import { styles } from './styles';

export default function Header() {
  const modal = useModalStore(state => state.modal);
  const openModal = useModalStore(state => state.openModal);
  const closeModal = useModalStore(state => state.closeModal);
  const user = useUserStore(state => state.user);
  const loginUser = useUserStore(state => state.loginUser);
  const logoutUser = useUserStore(state => state.logoutUser);

  function onClickLogin() {
    openModal('login');
  }

  function successLogin(user: User) {
    loginUser(user);
    closeModal();
  }

  return (
    <header>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        {user ? (
          <Button onClick={logoutUser}>로그아웃</Button>
        ) : (
          <Button onClick={onClickLogin}>로그인</Button>
        )}
        <Login modal={modal === 'login'} onSuccess={successLogin} />
      </div>
    </header>
  );
}
