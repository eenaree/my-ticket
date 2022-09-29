import { Link } from 'react-router-dom';
import { TEAM_LIST } from '@constants/global';
import { styles } from './styles';

export default function StadiumList() {
  return (
    <ul css={styles.stadiumSelect}>
      {TEAM_LIST.map(team => (
        <li key={team.team}>
          <span
            style={{
              '--team-logo': `url('/images/team/${team.team}.png')`,
            }}
          >
            <em>{team.name}</em>
            <em>{team.stadium}</em>
            <Link to={`/register/${team.team}`}>티켓 등록</Link>
          </span>
        </li>
      ))}
    </ul>
  );
}
