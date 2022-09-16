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

export function TeamList() {
  return (
    <ul css={styles.teamList}>
      {teams.map(team => (
        <li
          key={team.team}
          css={styles.teamBox}
          style={{ '--team-logo': `url(${team.logo})` }}
        >
          <label htmlFor={team.team}>
            <span>{team.name}</span>
            <input type="checkbox" id={team.team} />
          </label>
        </li>
      ))}
    </ul>
  );
}
