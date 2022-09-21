import { useEffect } from 'react';
import { useTeamStore, useUserStore } from '@store/.';
import { styles } from './styles';

export default function MyTeamList() {
  const user = useUserStore(state => state.user);
  const myTeams = useTeamStore(state => state.myTeams);
  const getMyTeams = useTeamStore(state => state.getMyTeams);

  useEffect(() => {
    if (user) {
      getMyTeams();
    }
  }, [user, getMyTeams]);

  if (!user) return <p css={styles.noneTeamList}>로그인이 필요합니다.</p>;
  if (myTeams.length == 0)
    return <p css={styles.noneTeamList}>선택한 팀이 없습니다.</p>;

  return (
    <ul css={styles.teamListWrapper}>
      {myTeams.map(myTeam => (
        <li key={myTeam} css={styles.teamList}>
          <button>
            <img src={`/images/team/${myTeam}.png`} alt={myTeam} />
          </button>
        </li>
      ))}
    </ul>
  );
}
