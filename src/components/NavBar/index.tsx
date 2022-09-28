import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import Login from '@components/Login';
import { useModalStore } from '@store/useModalStore';
import { useUserStore } from '@store/useUserStore';
import { User } from '@typings/db';
import { styles } from './styles';

export default function NavBar() {
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
    <nav>
      <ul css={styles.navList}>
        <li>
          {user ? (
            <Button onClick={logoutUser}>로그아웃</Button>
          ) : (
            <Button onClick={onClickLogin}>로그인</Button>
          )}
        </li>
      </ul>
      <Modal modal={modal === 'login'}>
        <Login onSuccess={successLogin} />
      </Modal>
    </nav>
  );
}
