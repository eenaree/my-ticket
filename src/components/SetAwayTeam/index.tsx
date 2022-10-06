import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RadioButton from '@components/common/RadioButton';
import { KBO_LEAGUE_TEAMS } from '@constants/global';
import {
  type TicketFormLocationState,
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';
import { TeamId, Teams } from '@typings/db';
import { styles } from './styles';

interface AwayTeamListProps {
  list: Teams;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checkedValue?: string;
}

export default function SetAwayTeam() {
  const location = useLocation();
  const ticketFormState = location.state as TicketFormLocationState;

  const ticketFormDispatch = useTicketFormDispatch();
  const { homeTeam, awayTeam } = useTicketForm();
  const [awayTeams, setAwayTeams] = useState(() => {
    if (awayTeam)
      return ticketFormState.awayTeams.filter(team => team[0] != awayTeam);
    return ticketFormState.awayTeams;
  });

  function onChangeAwayTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: TeamId }>
  ) {
    const changedAwayTeams = ticketFormState.awayTeams.filter(
      awayTeam => awayTeam[0] != e.target.value
    );
    setAwayTeams(changedAwayTeams);
    ticketFormDispatch({
      type: 'SET_AWAY_TEAM',
      awayTeam: e.target.value,
    });
  }

  return (
    <div css={styles.wrapper}>
      <h3>원정팀을 선택하세요</h3>
      <div css={styles.matchup}>
        <div>
          {awayTeam ? (
            <>
              <img
                src={`/images/team/${awayTeam}.png`}
                alt={awayTeam && KBO_LEAGUE_TEAMS[awayTeam]}
              />
              <em>{awayTeam && KBO_LEAGUE_TEAMS[awayTeam]}</em>
            </>
          ) : (
            <span>없음</span>
          )}
        </div>
        <div>
          <img
            src={`/images/team/${homeTeam}.png`}
            alt={homeTeam && KBO_LEAGUE_TEAMS[homeTeam]}
          />
          <em>{homeTeam && KBO_LEAGUE_TEAMS[homeTeam]}</em>
          <small>*홈팀</small>
        </div>
      </div>
      <AwayTeamList
        list={awayTeams}
        checkedValue={awayTeam}
        onChange={onChangeAwayTeam}
      />
    </div>
  );
}

function AwayTeamList({ list, onChange, checkedValue }: AwayTeamListProps) {
  return (
    <div css={styles.awayTeamList}>
      {list.map(team => (
        <RadioButton
          key={team[0]}
          id={team[0]}
          value={team[0]}
          checked={checkedValue == team[0]}
          onChange={onChange}
          label={team[1]}
        />
      ))}
    </div>
  );
}
