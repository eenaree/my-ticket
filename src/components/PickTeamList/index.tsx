import { TeamList } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: TeamList;
}

export default function PickTeamList({ teams }: Props) {
  if (teams.length == 0) {
    return <div css={styles.noneTeamList}>선택한 팀이 없습니다.</div>;
  }

  return (
    <ul css={styles.teamList}>
      {teams.map((team, index) => (
        <li key={team.team}>
          <button>
            <em>{index + 1}</em>
            <img src={`/images/team/${team.team}.png`} alt={team.name} />
            <span>{team.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
