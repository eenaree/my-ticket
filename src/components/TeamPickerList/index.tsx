import Checkbox from '@components/common/Checkbox';
import { TEAM_LIST } from '@constants/global';
import { Team } from '@typings/db';
import { styles } from './styles';

interface Props {
  teams: Team[];
  onChangeTeam: React.ChangeEventHandler<HTMLInputElement>;
}

export default function TeamPickerList({ teams, onChangeTeam }: Props) {
  return (
    <ul css={styles.teamList}>
      {TEAM_LIST.map(team => (
        <li
          key={team.team}
          css={styles.teamBox}
          style={{ '--team-logo': `url(/images/team/${team.team}.png)` }}
        >
          <Checkbox
            id={team.team}
            name="team"
            value={team.team}
            checked={teams.includes(team.team)}
            onChange={onChangeTeam}
            label={team.name}
          />
        </li>
      ))}
    </ul>
  );
}
