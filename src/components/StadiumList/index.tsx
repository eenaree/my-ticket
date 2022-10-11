import { Link } from 'react-router-dom';
import { KBO_LEAGUE_STADIUMS, KBOTeams } from '@constants/global';
import { styles } from './styles';

function getAwayTeams(teamId: string) {
  return KBOTeams.filter(team => team[0] !== teamId);
}

export default function StadiumList() {
  return (
    <ul css={styles.stadiumSelect}>
      {KBOTeams.map(team => (
        <li key={team[0]}>
          <span
            style={{
              '--team-logo': `url('/images/team/${team[0]}.png')`,
            }}
          >
            <em>{team[1]}</em>
            <em>{KBO_LEAGUE_STADIUMS[team[0]]}</em>
            <Link
              to={team[0]}
              state={{
                homeTeam: [...team],
                awayTeams: getAwayTeams(team[0]),
                stadium: KBO_LEAGUE_STADIUMS[team[0]],
              }}
            >
              티켓 등록
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );
}
