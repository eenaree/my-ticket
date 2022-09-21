import { useRef } from 'react';
import Button from '@components/common/Button';
import Modal from '@components/common/Modal';
import TeamPickerList from '@components/TeamPickerList';
import { useModalStore, useTeamStore } from '@store/.';
import { colors } from '@styles/theme';
import { Team } from '@typings/db';
import { styles } from './styles';

export default function TeamPicker() {
  const modal = useModalStore(state => state.modal);
  const closeModal = useModalStore(state => state.closeModal);
  const myTeams = useTeamStore(state => state.myTeams);
  const changedTeamsRef = useRef(new Set(myTeams));

  function onChangeTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: Team }>
  ) {
    if (e.target.checked) {
      changedTeamsRef.current?.add(e.target.value);
    } else {
      changedTeamsRef.current?.delete(e.target.value);
    }
  }

  return (
    <Modal modal={modal === 'team-picker'}>
      <section css={styles.modalWrapper}>
        <div css={styles.modalHeader}>
          <h2>팀 선택</h2>
          <button css={styles.closeButton} onClick={closeModal} />
        </div>
        <div css={styles.modalBody}>
          <form>
            <TeamPickerList onChangeTeam={onChangeTeam} />
            <Button bgColor={colors.indigo[600]} fullWidth>
              저장
            </Button>
          </form>
        </div>
      </section>
    </Modal>
  );
}
