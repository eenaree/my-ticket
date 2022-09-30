import { useState } from 'react';
import Dropdown from '@components/common/Dropdown';
import { styles } from './styles';

function getMatchCalendar() {
  function getMatchYears() {
    const currentYear = new Date().getFullYear();
    const matchStartYear = 1982;
    const years: number[] = [];

    for (let i = currentYear; i >= matchStartYear; i--) {
      years.push(i);
    }

    return years;
  }

  return {
    years: getMatchYears(),
    months: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  };
}

function getDates(year: number, month: number) {
  const dates: number[] = [];
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= lastDayOfMonth; i++) {
    dates.push(i);
  }

  return dates;
}

const { years, months } = getMatchCalendar();

export default function SetMatchDate() {
  const [matchDate, setMatchDate] = useState({ year: 0, month: 0, date: 0 });
  const [dates, setDates] = useState(() => {
    return getDates(matchDate.year, matchDate.month - 1);
  });

  function onChangeYear(year: number) {
    const newDates = getDates(year, matchDate.month - 1);
    setDates(newDates);
    setMatchDate(prev => ({
      ...prev,
      year,
    }));
  }

  function onChangeMonth(month: number) {
    const newDates = getDates(matchDate.year, month - 1);
    const hasFewerDates = newDates.length < matchDate.date;
    setDates(newDates);
    setMatchDate(prev => ({
      ...prev,
      month,
      date: hasFewerDates ? 1 : prev.date,
    }));
  }

  function onChangeDate(date: number) {
    setMatchDate(prev => ({ ...prev, date }));
  }

  return (
    <div css={styles.wrapper}>
      <h3>경기 날짜를 선택하세요</h3>
      <div css={styles.selectCalendar}>
        <Dropdown
          list={years}
          selectedValue={matchDate.year || '년도'}
          onChangeValue={onChangeYear}
        />
        <Dropdown
          list={months}
          selectedValue={matchDate.month || '월'}
          onChangeValue={onChangeMonth}
        />
        <Dropdown
          list={dates}
          selectedValue={matchDate.date || '일'}
          onChangeValue={onChangeDate}
        />
      </div>
    </div>
  );
}
