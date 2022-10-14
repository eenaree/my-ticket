import { Link } from 'react-router-dom';
import {
  KBO_LEAGUE_STADIUMS,
  KBO_LEAGUE_TEAMS_FULLNAME,
  KBOTeams,
} from '@constants/global';
import { styles } from './styles';

export default function StadiumList() {
  return (
    <ul css={styles.stadiumList}>
      {KBOTeams.map(team => {
        const teamId = team[0];
        const teamFullName = KBO_LEAGUE_TEAMS_FULLNAME[team[0]];
        const homeStadium = KBO_LEAGUE_STADIUMS[team[0]];

        return (
          <li
            key={teamId}
            style={{
              '--team-logo': `url('/images/team/${teamId}.png')`,
            }}
          >
            <em>{teamFullName}</em>
            <em>{homeStadium}</em>
            <Link to={teamId}>티켓 등록</Link>
          </li>
        );
      })}
    </ul>
  );
}
