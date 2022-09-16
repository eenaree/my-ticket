import * as React from 'react';
import HH from '@assets/team/HH.png';
import HT from '@assets/team/HT.png';
import KT from '@assets/team/KT.png';
import LG from '@assets/team/LG.png';
import LT from '@assets/team/LT.png';
import NC from '@assets/team/NC.png';
import OB from '@assets/team/OB.png';
import SK from '@assets/team/SK.png';
import SS from '@assets/team/SS.png';
import WO from '@assets/team/WO.png';
import Checkbox from '@components/common/Checkbox';
import { useTeamStore } from '@store/useTeamStore';
import { styles } from './styles';

const teams = [
  { team: 'KT', name: 'KT', logo: KT },
  { team: 'OB', name: '두산', logo: OB },
  { team: 'SS', name: '삼성', logo: SS },
  { team: 'LG', name: 'LG', logo: LG },
  { team: 'WO', name: '키움', logo: WO },
  { team: 'SK', name: 'SSG', logo: SK },
  { team: 'LT', name: '롯데', logo: LT },
  { team: 'NC', name: 'NC', logo: NC },
  { team: 'HT', name: '기아', logo: HT },
  { team: 'HH', name: '한화', logo: HH },
] as const;

export type Teams = typeof teams[number]['team'];

export function TeamList() {
  const myTeams = useTeamStore(state => state.myTeams);
  const addMyTeam = useTeamStore(state => state.addMyTeam);
  const removeMyTeam = useTeamStore(state => state.removeMyTeam);

  function onChangeTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: Teams }>
  ) {
    if (e.target.checked) {
      addMyTeam(e.target.value);
    } else {
      removeMyTeam(e.target.value);
    }
  }

  return (
    <ul css={styles.teamList}>
      {teams.map(team => (
        <li
          key={team.team}
          css={styles.teamBox}
          style={{ '--team-logo': `url(${team.logo})` }}
        >
          <Checkbox
            id={team.team}
            name="team"
            value={team.team}
            checked={myTeams.includes(team.team)}
            onChange={onChangeTeam}
            label={team.name}
          />
        </li>
      ))}
    </ul>
  );
}
