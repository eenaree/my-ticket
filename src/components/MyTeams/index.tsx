import Button from '@components/common/Button';
import TeamPicker from '@components/TeamPicker';
import { useModalStore, useUserStore } from '@store/.';
import { colors } from '@styles/theme';
import { styles } from './styles';

export default function MyTeams() {
  const user = useUserStore(state => state.user);
  const openModal = useModalStore(state => state.openModal);

  function addTeams() {
    user ? openModal('team-picker') : openModal('login');
  }

  return (
    <section css={styles.inner}>
      <div css={styles.title}>
        <h2>나의 팀</h2>
        <Button onClick={addTeams} bgColor={colors.indigo[600]}>
          팀 추가
        </Button>
        <TeamPicker />
      </div>
    </section>
  );
}
