import Checkbox from '@components/common/Checkbox';
import { TEAM_LIST } from '@constants/global';
import { useTeamStore } from '@store/.';
import { styles } from './styles';

interface Props {
  onChangeTeam: React.ChangeEventHandler<HTMLInputElement>;
}

export function TeamList({ onChangeTeam }: Props) {
  const myTeams = useTeamStore(state => state.myTeams);

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
            defaultChecked={myTeams.includes(team.team)}
            onChange={onChangeTeam}
            label={team.name}
          />
        </li>
      ))}
    </ul>
  );
}
