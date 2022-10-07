import { KBO_LEAGUE_TEAMS } from '@constants/global';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';

export default function SetMatchScore() {
  const { homeTeam, awayTeam, score } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeAwayTeamScore(e: React.ChangeEvent<HTMLInputElement>) {
    const score = +e.target.value;
    if (isNaN(score) || score > 99) return;
    ticketFormDispatch({ type: 'SET_AWAYTEAM_SCORE', score });
  }

  function onChangeHomeTeamScore(e: React.ChangeEvent<HTMLInputElement>) {
    const score = +e.target.value;
    if (isNaN(score) || score > 99) return;
    ticketFormDispatch({ type: 'SET_HOMETEAM_SCORE', score });
  }

  if (!(homeTeam && awayTeam)) return null;

  return (
    <div>
      <h3>경기 결과를 입력하세요</h3>
      <div>
        <div>
          <input
            type="text"
            id="awayTeam"
            value={score.awayTeam}
            onChange={onChangeAwayTeamScore}
          />
          <label htmlFor="awayTeam">
            <img
              src={`/images/team/${awayTeam}.png`}
              alt={KBO_LEAGUE_TEAMS[awayTeam]}
            />
            <span>{KBO_LEAGUE_TEAMS[awayTeam]}</span>
          </label>
        </div>
        <div>
          <input
            type="text"
            id="homeTeam"
            value={score.homeTeam}
            onChange={onChangeHomeTeamScore}
          />
          <label htmlFor="homeTeam">
            <img
              src={`/images/team/${homeTeam}.png`}
              alt={KBO_LEAGUE_TEAMS[homeTeam]}
            />
            <span>{KBO_LEAGUE_TEAMS[homeTeam]}</span>
          </label>
        </div>
      </div>
    </div>
  );
}
