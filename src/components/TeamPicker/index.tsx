import { useState } from 'react';
import Button from '@components/common/Button';
import PickTeamList from '@components/PickTeamList';
import TeamPickerList from '@components/TeamPickerList';
import { useModalStore, useTeamStore } from '@store/.';
import { colors } from '@styles/theme';
import { Team, TeamName } from '@typings/db';
import { styles } from './styles';

export default function TeamPicker() {
  const closeModal = useModalStore(state => state.closeModal);
  const myTeams = useTeamStore(state => state.myTeams);
  const changeMyTeams = useTeamStore(state => state.changeMyTeams);
  const [changedTeams, setChangedTeams] = useState(myTeams);

  function onChangeTeam(
    e: React.ChangeEvent<
      HTMLInputElement & { value: Team; dataset: { value: TeamName } }
    >
  ) {
    const team = { team: e.target.value, name: e.target.dataset.value };
    if (e.target.checked) {
      setChangedTeams(prev => prev.concat(team));
    } else {
      setChangedTeams(prev => prev.filter(exTeam => exTeam.team !== team.team));
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isChanged =
      myTeams.length !== changedTeams.length ||
      (changedTeams.length > 0 &&
        changedTeams.some(changedTeam => {
          return myTeams.findIndex(exTeam => exTeam == changedTeam) == -1;
        }));

    if (isChanged) {
      changeMyTeams(changedTeams);
    } else {
      closeModal();
    }
  }

  return (
    <section css={styles.modalWrapper}>
      <div css={styles.modalHeader}>
        <h2>팀 선택</h2>
        <button css={styles.closeButton} onClick={closeModal} />
      </div>
      <div css={styles.modalBody}>
        <PickTeamList teams={changedTeams} />
        <form onSubmit={onSubmit}>
          <TeamPickerList teams={changedTeams} onChangeTeam={onChangeTeam} />
          <Button bgColor={colors.indigo[600]} fullWidth>
            저장
          </Button>
        </form>
      </div>
    </section>
  );
}
