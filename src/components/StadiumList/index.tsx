import { Link } from 'react-router-dom';
import { TEAM_LIST } from '@constants/global';
import { useModalStore } from '@store/useModalStore';
import { Team } from '@typings/db';
import { styles } from './styles';

function getAwayTeams(team: Team) {
  return TEAM_LIST.filter(teamInfo => teamInfo.team !== team);
}

export default function StadiumList() {
  const closeModal = useModalStore(state => state.closeModal);

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
            <Link
              to="/register"
              state={{
                homeTeam: { ...team },
                awayTeams: getAwayTeams(team.team),
              }}
              onClick={closeModal}
            >
              티켓 등록
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );
}
