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
  const [pickedTeams, setPickedTeams] = useState(myTeams);

  function onChangeTeam(
    e: React.ChangeEvent<
      HTMLInputElement & { value: Team; dataset: { value: TeamName } }
    >
  ) {
    const team = { team: e.target.value, name: e.target.dataset.value };
    if (e.target.checked) {
      setPickedTeams(prev => prev.concat(team));
    } else {
      setPickedTeams(prev => prev.filter(exTeam => exTeam.team !== team.team));
    }
  }

  function savePickedTeams() {
    const isChanged =
      myTeams.length !== pickedTeams.length ||
      (pickedTeams.length > 0 &&
        pickedTeams.some(pickedTeam => {
          return myTeams.findIndex(exTeam => exTeam == pickedTeam) == -1;
        }));

    if (isChanged) {
      changeMyTeams(pickedTeams);
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
        <PickTeamList teams={pickedTeams} />
        <TeamPickerList teams={pickedTeams} onChangeTeam={onChangeTeam} />
        <Button
          bgColor={colors.indigo[600]}
          fullWidth
          onClick={savePickedTeams}
        >
          저장
        </Button>
      </div>
    </section>
  );
}
