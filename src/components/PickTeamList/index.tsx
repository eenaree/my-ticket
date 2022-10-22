import { KBO_LEAGUE_TEAMS } from '~/constants/global';
import { TeamId } from '~/typings/db';
import { styles } from './styles';

interface Props {
  teams: TeamId[];
}

export default function PickTeamList({ teams }: Props) {
  if (teams.length == 0) {
    return <div css={styles.noneTeamList}>선택한 팀이 없습니다.</div>;
  }

  return (
    <ul css={styles.teamList}>
      {teams.map((teamId, index) => (
        <li key={teamId}>
          <button>
            <em>{index + 1}</em>
            <img
              src={`/images/team/${teamId}.png`}
              alt={KBO_LEAGUE_TEAMS[teamId]}
            />
            <span>{KBO_LEAGUE_TEAMS[teamId]}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
