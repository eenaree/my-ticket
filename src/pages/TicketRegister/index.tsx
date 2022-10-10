import { useState } from 'react';
import Button from '@components/common/Button';
import ConfirmTicket from '@components/ConfirmTicket';
import ProgressIndicator from '@components/ProgressIndicator';
import SetAwayTeam from '@components/SetAwayTeam';
import SetMatchDate from '@components/SetMatchDate';
import SetMatchScore from '@components/SetMatchScore';
import SetMatchSeason from '@components/SetMatchSeason';
import SetMyTeam from '@components/SetMyTeam';
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
    case 4:
      return <SetMyTeam />;
    case 5:
      return <SetMatchScore />;
    case 6:
      return <ConfirmTicket />;
  }
}

const stepTitles = ['시즌', '경기 날짜', '매치업', '응원팀', '스코어', '등록'];

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
    if (formStep == 3) {
      const { homeTeam, awayTeam, stadium } = ticketForm;
      if (homeTeam && awayTeam && stadium) return true;
      return false;
    }
    if (formStep == 4) {
      const { myTeam, opponentTeam } = ticketForm;
      if (myTeam && opponentTeam) return true;
      return false;
    }

    return true;
  }

  return (
    <section>
      <form css={styles.form}>
        <h2>티켓 등록</h2>
        <ProgressIndicator step={formStep} stepTitles={stepTitles} />
        {renderTicketRegisterForm(formStep)}
        <div css={styles.formNavigation}>
          <Button
            onClick={prevStep}
            disabled={formStep <= 1}
            bgColor={colors.gray[600]}
          >
            이전
          </Button>
          <Button
            onClick={nextStep}
            disabled={!validateForm()}
            bgColor={colors.indigo[600]}
          >
            다음
          </Button>
        </div>
      </form>
    </section>
  );
}
