import { Teams } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: Teams;
}

export default function PickTeamList({ teams }: Props) {
  if (teams.length == 0) {
    return <div css={styles.noneTeamList}>선택한 팀이 없습니다.</div>;
  }

  return (
    <ul css={styles.teamList}>
      {teams.map((team, index) => (
        <li key={team[0]}>
          <button>
            <em>{index + 1}</em>
            <img src={`/images/team/${team[0]}.png`} alt={team[1]} />
            <span>{team[1]}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
