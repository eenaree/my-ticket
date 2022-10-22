import { useState } from 'react';
import Button from '~/components/common/Button';
import PickTeamList from '~/components/PickTeamList';
import TeamPickerList from '~/components/TeamPickerList';
import { useModalStore, useSnackBarStore, useTeamStore } from '~/store';
import { TeamId, TeamName } from '~/typings/db';
import { styles } from './styles';

export default function TeamPicker() {
  const closeModal = useModalStore(state => state.closeModal);
  const myTeams = useTeamStore(state => state.myTeams);
  const setMyTeams = useTeamStore(state => state.setMyTeams);
  const [pickedTeams, setPickedTeams] = useState(myTeams);
  const openSnackBar = useSnackBarStore(state => state.openSnackBar);

  function onChangeTeam(
    e: React.ChangeEvent<
      HTMLInputElement & { value: TeamId; dataset: { value: TeamName } }
    >
  ) {
    if (e.target.checked) {
      setPickedTeams(prev => [...prev, e.target.value]);
    } else {
      setPickedTeams(prev =>
        prev.filter(exTeamId => exTeamId != e.target.value)
      );
    }
  }

  async function savePickedTeams() {
    const isChanged =
      myTeams.length !== pickedTeams.length ||
      (pickedTeams.length > 0 &&
        pickedTeams.some(pickedTeam => !myTeams.includes(pickedTeam)));

    if (isChanged) {
      await setMyTeams(pickedTeams);
      openSnackBar('MY팀이 변경되었습니다.');
    }

    closeModal();
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
        <Button variant="primary" fullWidth onClick={savePickedTeams}>
          저장
        </Button>
      </div>
    </section>
  );
}
