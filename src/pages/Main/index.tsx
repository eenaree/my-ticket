import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import MyTeamList from '@components/MyTeamList';
import TeamPicker from '@components/TeamPicker';
import { useModalStore } from '@store/useModalStore';
import { useUserStore } from '@store/useUserStore';
import { styles } from './styles';

export default function Main() {
  const user = useUserStore(state => state.user);
  const openModal = useModalStore(state => state.openModal);
  const modal = useModalStore(state => state.modal);

  function addTeams() {
    user ? openModal('team-picker') : openModal('login');
  }

  return (
    <>
      <section>
        <header css={styles.title}>
          <h2>나의 팀</h2>
          <Button onClick={addTeams} variant="primary">
            팀 추가
          </Button>
          <Modal modal={modal === 'team-picker'}>
            <TeamPicker />
          </Modal>
        </header>
        <MyTeamList />
      </section>
    </>
  );
}
