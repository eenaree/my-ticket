import { useState } from 'react';
import Button from '@components/common/Button';
import TeamPickerList from '@components/TeamPickerList';
import { useModalStore, useTeamStore } from '@store/.';
import { colors } from '@styles/theme';
import { Team } from '@typings/db';
import { styles } from './styles';

export default function TeamPicker() {
  const closeModal = useModalStore(state => state.closeModal);
  const myTeams = useTeamStore(state => state.myTeams);
  const [changedTeams, setChangedTeams] = useState(myTeams);

  function onChangeTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: Team }>
  ) {
    if (e.target.checked) {
      setChangedTeams(prev => prev.concat(e.target.value));
    } else {
      setChangedTeams(prev => prev.filter(exTeam => exTeam !== e.target.value));
    }
  }

  return (
    <section css={styles.modalWrapper}>
      <div css={styles.modalHeader}>
        <h2>팀 선택</h2>
        <button css={styles.closeButton} onClick={closeModal} />
      </div>
      <div css={styles.modalBody}>
        <form>
          <TeamPickerList teams={changedTeams} onChangeTeam={onChangeTeam} />
          <Button bgColor={colors.indigo[600]} fullWidth>
            저장
          </Button>
        </form>
      </div>
    </section>
  );
}
