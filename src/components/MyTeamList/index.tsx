import { useEffect } from 'react';
import { useTeamStore } from '@store/.';
import { styles } from './styles';

export default function MyTeamList() {
  const myTeams = useTeamStore(state => state.myTeams);
  const getMyTeams = useTeamStore(state => state.getMyTeams);

  useEffect(() => {
    getMyTeams();
  }, []);

  if (myTeams.length == 0)
    return <div css={styles.noneTeamList}>선택한 팀이 없습니다.</div>;

  return (
    <div>
      <ul css={styles.teamList}>
        {myTeams.map(myTeam => (
          <li key={myTeam[0]} css={styles.team}>
            <button>
              <img src={`/images/team/${myTeam[0]}.png`} alt={myTeam[1]} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
