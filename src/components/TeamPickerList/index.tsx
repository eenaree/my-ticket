import Checkbox from '@components/common/Checkbox';
import { KBO_LEAGUE_TEAMS, KBOTeams } from '@constants/global';
import { TeamId } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: TeamId[];
  onChangeTeam: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TeamPickerList({ teams, onChangeTeam }: Props) {
  return (
    <ul css={styles.teamList}>
      {KBOTeams.map(teamId => (
        <li key={teamId}>
          <span style={{ '--team-logo': `url('/images/team/${teamId}.png')` }}>
            <Checkbox
              id={teamId}
              name="team"
              value={teamId}
              checked={teams.includes(teamId)}
              onChange={onChangeTeam}
              label={KBO_LEAGUE_TEAMS[teamId]}
              data-value={KBO_LEAGUE_TEAMS[teamId]}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
