import SetMatchSeries from '@components/SetMatchSeries';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';

const KBO_LEAGUE_SEASONS = ['정규시즌', '포스트시즌'];

export default function SetMatchSeason() {
  const { matchSeason } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeMatchSeason(e: React.ChangeEvent<HTMLInputElement>) {
    ticketFormDispatch({ type: 'SET_MATCH_SEASON', season: e.target.value });
  }

  return (
    <div>
      <h3>경기 시즌을 선택하세요</h3>
      <div>
        {KBO_LEAGUE_SEASONS.map(season => (
          <span key={season}>
            <input
              type="radio"
              name="season"
              id={season}
              value={season}
              checked={matchSeason == season}
              onChange={onChangeMatchSeason}
            />
            <label htmlFor={season}>{season}</label>
          </span>
        ))}
      </div>
      {matchSeason == '포스트시즌' && <SetMatchSeries />}
    </div>
  );
}
