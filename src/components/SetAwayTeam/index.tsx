import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RadioButton from '@components/common/RadioButton';
import { KBO_LEAGUE_TEAMS, KBOTeams } from '@constants/global';
import {
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
  const params = useParams<'teamId'>();
  const awayTeamsExcludingHomeTeam = KBOTeams.filter(
    ([teamId]) => teamId !== params.teamId
  );

  const ticketFormDispatch = useTicketFormDispatch();
  const { homeTeam, awayTeam } = useTicketForm();
  const [awayTeams, setAwayTeams] = useState(() => {
    return awayTeam
      ? awayTeamsExcludingHomeTeam.filter(([teamId]) => teamId != awayTeam)
      : awayTeamsExcludingHomeTeam;
  });

  function onChangeAwayTeam(
    e: React.ChangeEvent<HTMLInputElement & { value: TeamId }>
  ) {
    const changedAwayTeams = awayTeamsExcludingHomeTeam.filter(
      ([teamId]) => teamId != e.target.value
    );
    setAwayTeams(changedAwayTeams);
    ticketFormDispatch({
      type: 'SET_AWAY_TEAM',
      awayTeam: e.target.value,
    });
  }

  return (
    <div>
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
