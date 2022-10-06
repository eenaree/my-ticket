import { useState } from 'react';
import Button from '@components/common/Button';
import SetAwayTeam from '@components/SetAwayTeam';
import SetMatchDate from '@components/SetMatchDate';
import SetMatchSeason from '@components/SetMatchSeason';
import { useTicketForm } from '@context/TicketFormContext';
import { colors } from '@styles/theme';
import { styles } from './styles';

function renderTicketRegisterForm(step: number) {
  switch (step) {
    case 1:
      return <SetMatchSeason />;
    case 2:
      return <SetMatchDate />;
    case 3:
      return <SetAwayTeam />;
  }
}

export default function TicketRegister() {
  const [formStep, setFormStep] = useState(1);
  const ticketForm = useTicketForm();

  function prevStep() {
    setFormStep(prev => prev - 1);
  }

  function nextStep() {
    setFormStep(prev => prev + 1);
  }

  function validateForm() {
    if (formStep == 1) {
      const { matchSeason, matchSeries } = ticketForm;
      if (
        matchSeason == '정규시즌' ||
        (matchSeason == '포스트시즌' && matchSeries)
      )
        return true;
      return false;
    }
    if (formStep == 2) {
      const { year, month, date } = ticketForm.matchDate;
      if (year && month && date) return true;
      return false;
    }
  }

  return (
    <section css={styles.wrapper}>
      <h2>티켓 등록</h2>
      <form>
        {renderTicketRegisterForm(formStep)}
        <div css={styles.formNavigation}>
          <Button
            onClick={prevStep}
            disabled={formStep <= 1}
            bgColor={colors.gray[800]}
          >
            이전
          </Button>
          <Button
            onClick={nextStep}
            disabled={!validateForm()}
            bgColor={colors.gray[800]}
          >
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
