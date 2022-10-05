import RadioButton from '@components/common/RadioButton';
import SetMatchSeries from '@components/SetMatchSeries';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';
import { styles } from './styles';

interface RadioButtonGroupProps {
  checkedValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const KBO_LEAGUE_SEASONS = ['정규시즌', '포스트시즌'];

export default function SetMatchSeason() {
  const { matchSeason } = useTicketForm();
  const ticketFormDispatch = useTicketFormDispatch();

  function onChangeMatchSeason(e: React.ChangeEvent<HTMLInputElement>) {
    ticketFormDispatch({ type: 'SET_MATCH_SEASON', season: e.target.value });
  }

  return (
    <div css={styles.wrapper}>
      <h3>경기 시즌을 선택하세요</h3>
      <RadioButtonGroup
        checkedValue={matchSeason}
        onChange={onChangeMatchSeason}
      />
      {matchSeason == '포스트시즌' && <SetMatchSeries />}
    </div>
  );
}

function RadioButtonGroup({ checkedValue, onChange }: RadioButtonGroupProps) {
  return (
    <div css={styles.radioButtonWrapper}>
      {KBO_LEAGUE_SEASONS.map(season => (
        <RadioButton
          key={season}
          id={season}
          value={season}
          name="season"
          checked={checkedValue == season}
          onChange={onChange}
          label={season}
        />
      ))}
    </div>
  );
}
