import RadioButton from '@components/common/RadioButton';
import {
  useTicketForm,
  useTicketFormDispatch,
} from '@context/TicketFormContext';
import { styles } from './styles';

interface RadioButtonGroupProps {
  checkedValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

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
      <RadioButtonGroup
        checkedValue={matchSeries}
        onChange={onChangeMatchSeries}
      />
    </div>
  );
}

function RadioButtonGroup({ checkedValue, onChange }: RadioButtonGroupProps) {
  return (
    <div css={styles.radioButtonWrapper}>
      {KBO_POSTSEASON_SERIES.map(series => (
        <RadioButton
          key={series}
          id={series}
          value={series}
          name="series"
          checked={checkedValue == series}
          onChange={onChange}
          label={series}
        />
      ))}
    </div>
  );
}
