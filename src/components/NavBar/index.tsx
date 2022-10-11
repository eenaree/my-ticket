import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import StadiumPicker from '@components/StadiumPicker';
import { useModalStore } from '@store/useModalStore';
import { useUserStore } from '@store/useUserStore';
import { styles } from './styles';

export default function NavBar() {
  const modal = useModalStore(state => state.modal);
  const openModal = useModalStore(state => state.openModal);
  const logoutUser = useUserStore(state => state.logoutUser);

  return (
    <nav>
      <ul css={styles.navList}>
        <li>
          <Button onClick={() => openModal('stadium-picker')}>티켓 등록</Button>
        </li>
        <li>
          <Button onClick={logoutUser}>로그아웃</Button>
        </li>
      </ul>
      <Modal modal={modal === 'stadium-picker'}>
        <StadiumPicker />
      </Modal>
    </nav>
  );
}
