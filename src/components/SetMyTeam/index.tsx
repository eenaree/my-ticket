import RadioButton from '@components/common/RadioButton';
import { KBO_LEAGUE_TEAMS } from '@constants/global';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';
import { TeamId } from '@typings/db';
import { styles } from './styles';

export default function SetMyTeam() {
  const { homeTeam, awayTeam, myTeam } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeMyTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: TeamId }>
  ) {
    ticketFormDispatch({ type: 'SET_MYTEAM', team: e.target.value });
  }

  return (
    <div>
      <h3>응원팀을 선택하세요</h3>
      <div css={styles.matchTeams}>
        {[awayTeam, homeTeam].map(team => (
          <RadioButton
            key={team}
            id={team}
            value={team}
            checked={team == myTeam}
            onChange={onChangeMyTeam}
            label={
              team && (
                <div css={styles.team}>
                  <img
                    src={`/images/team/${team}.png`}
                    alt={KBO_LEAGUE_TEAMS[team]}
                  />
                  <em>{KBO_LEAGUE_TEAMS[team]}</em>
                  {team == homeTeam && <small>*홈팀</small>}
                </div>
              )
            }
          />
        ))}
      </div>
    </div>
  );
}
