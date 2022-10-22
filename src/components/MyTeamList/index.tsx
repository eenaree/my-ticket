import { useEffect } from 'react';
import { KBO_LEAGUE_TEAMS } from '~/constants/global';
import { useTeamStore } from '~/store';
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
        {myTeams.map(teamId => (
          <li key={teamId} css={styles.team}>
            <button>
              <img
                src={`/images/team/${teamId}.png`}
                alt={KBO_LEAGUE_TEAMS[teamId]}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
