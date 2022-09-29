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

  if (!user) return <div css={styles.noneTeamList}>로그인이 필요합니다.</div>;
  if (myTeams.length == 0)
    return <div css={styles.noneTeamList}>선택한 팀이 없습니다.</div>;

  return (
    <div>
      <ul css={styles.teamList}>
        {myTeams.map(myTeam => (
          <li key={myTeam.team} css={styles.team}>
            <button>
              <img src={`/images/team/${myTeam.team}.png`} alt={myTeam.name} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
