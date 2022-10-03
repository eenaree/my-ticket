import { useState } from 'react';
import useDetectOutsideClick from '@hooks/useDetectOutsideClick';
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
  const setDropdownRef = useDetectOutsideClick(visible, toggleDropdownVisible);

  function toggleDropdownVisible() {
    setVisible(prev => !prev);
  }

  function onChange(value: string | number) {
    setVisible(false);
    if (value === selectedValue) return;
    onChangeValue(value);
  }

  return (
    <div
      css={styles.dropdownWrapper}
      style={{ '--dropdown-width': width }}
      ref={setDropdownRef}
    >
      <button
        type="button"
        onClick={toggleDropdownVisible}
        css={styles.toggleButton(visible)}
        disabled={list.length == 0}
      >
        {selectedValue}
      </button>
      <ul css={styles.dropdownList(visible)}>
        {list.map(value => (
          <li key={value}>
            <button
              type="button"
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
