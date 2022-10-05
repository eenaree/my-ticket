import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';

const KBO_POSTSEASON_SERIES = [
  '와일드카드 결정전',
  '준플레이오프',
  '플레이오프',
  '한국시리즈',
];

export default function SetMatchSeries() {
  const { matchSeries } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeMatchSeries(e: React.ChangeEvent<HTMLInputElement>) {
    ticketFormDispatch({ type: 'SET_MATCH_SERIES', series: e.target.value });
  }

  return (
    <div>
      <h3>시리즈를 선택하세요</h3>
      <div>
        {KBO_POSTSEASON_SERIES.map(series => (
          <span key={series}>
            <input
              type="radio"
              name="series"
              id={series}
              value={series}
              checked={matchSeries == series}
              onChange={onChangeMatchSeries}
            />
            <label htmlFor={series}>{series}</label>
          </span>
        ))}
      </div>
    </div>
  );
}
