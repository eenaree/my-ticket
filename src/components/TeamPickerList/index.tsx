import Checkbox from '@components/common/Checkbox';
import { TEAM_LIST } from '@constants/global';
import { Team, TeamList } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: TeamList;
  onChangeTeam: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TeamPickerList({ teams, onChangeTeam }: Props) {
  function getTeamIsChecked(team: Team) {
    return teams.findIndex(teamInfo => teamInfo.team == team) !== -1;
  }

  return (
    <ul css={styles.teamList}>
      {TEAM_LIST.map(team => (
        <li key={team.team}>
          <span
            style={{ '--team-logo': `url('/images/team/${team.team}.png')` }}
          >
            <Checkbox
              id={team.team}
              name="team"
              value={team.team}
              checked={getTeamIsChecked(team.team)}
              onChange={onChangeTeam}
              label={team.name}
              data-value={team.name}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
