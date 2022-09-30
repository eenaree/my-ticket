import { useState } from 'react';
import { styles } from './styles';

interface Props {
  list: string[] | number[];
  selectedValue: string | number;
  onChangeValue(value: string | number): void;
  width?: string;
}

export default function Dropdown({
  selectedValue,
  list,
  onChangeValue,
  width = '100%',
}: Props) {
  const [visible, setVisible] = useState(false);

  function toggleDropdownVisible() {
    setVisible(prev => !prev);
  }

  function onChange(value: string | number) {
    setVisible(false);
    if (value === selectedValue) return;
    onChangeValue(value);
  }

  return (
    <div css={styles.dropdownWrapper} style={{ '--dropdown-width': width }}>
      <button
        onClick={toggleDropdownVisible}
        css={styles.toggleButton(visible)}
      >
        {selectedValue}
      </button>
      <ul css={styles.dropdownList(visible)}>
        {list.map(value => (
          <li key={value}>
            <button
              onClick={() => onChange(value)}
              css={styles.value(value === selectedValue)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
