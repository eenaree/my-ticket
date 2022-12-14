import Button from '~/components/common/Button';
import Modal from '~/components/common/Modal';
import MyTeamList from '~/components/MyTeamList';
import TeamPicker from '~/components/TeamPicker';
import { useModalStore } from '~/store/useModalStore';
import { styles } from './styles';

export default function MyTeam() {
  const modal = useModalStore(state => state.modal);
  const openModal = useModalStore(state => state.openModal);

  return (
    <>
      <section css={styles.wrapper}>
        <header css={styles.title}>
          <h2>MY ν</h2>
          <Button onClick={() => openModal('team-picker')} variant="primary">
            ν μΆκ°
          </Button>
        </header>
        <MyTeamList />
      </section>
      <Modal modal={modal === 'team-picker'}>
        <TeamPicker />
      </Modal>
    </>
  );
}
