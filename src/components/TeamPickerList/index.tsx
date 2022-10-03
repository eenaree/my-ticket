import Checkbox from '@components/common/Checkbox';
import { KBOTeams } from '@constants/global';
import { TeamId, Teams } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: Teams;
  onChangeTeam: React.ChangeEventHandler<HTMLInputElement>;
}

function getTeamIsChecked(teams: Teams, teamId: TeamId) {
  return teams.findIndex(team => team[0] == teamId) !== -1;
}

export default function TeamPickerList({ teams, onChangeTeam }: Props) {
  return (
    <ul css={styles.teamList}>
      {KBOTeams.map(team => (
        <li key={team[0]}>
          <span style={{ '--team-logo': `url('/images/team/${team[0]}.png')` }}>
            <Checkbox
              id={team[0]}
              name="team"
              value={team[0]}
              checked={getTeamIsChecked(teams, team[0])}
              onChange={onChangeTeam}
              label={team[1]}
              data-value={team[1]}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
