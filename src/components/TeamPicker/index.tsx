import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { TeamList } from '@components/TeamList';
import { useModalStore } from '@store/.';
import { colors } from '@styles/theme';
import { styles } from './styles';

export default function TeamPicker() {
  const modal = useModalStore(state => state.modal);
  const closeModal = useModalStore(state => state.closeModal);

  return (
    <Modal modal={modal === 'team-picker'}>
      <section css={styles.modalWrapper}>
        <div css={styles.modalHeader}>
          <h2>팀 선택</h2>
          <button css={styles.closeButton} onClick={closeModal} />
        </div>
        <div css={styles.modalBody}>
          <form>
            <TeamList />
            <Button bgColor={colors.indigo[600]} fullWidth>
              저장
            </Button>
          </form>
        </div>
      </section>
    </Modal>
  );
}
