import * as React from 'react';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import { TeamList } from '@components/TeamList';
import { useModalStore } from '@store/useModalStore';
import { colors } from '@styles/theme';
import { styles } from './styles';

export default function TeamPicker() {
  const { modal, openModal, closeModal } = useModalStore();

  function onClick(e: React.MouseEvent) {
    if (e.target instanceof HTMLElement) {
      if (e.target.dataset.modal === 'team-picker') {
        openModal('team-picker');
      }
    }
  }

  return (
    <section css={styles.inner}>
      <Button onClick={onClick} data-modal="team-picker">
        팀 선택하기
      </Button>
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
    </section>
  );
}