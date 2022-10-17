import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/common/Button';
import ConfirmTicket from '@components/ConfirmTicket';
import ProgressIndicator from '@components/ProgressIndicator';
import SetAwayTeam from '@components/SetAwayTeam';
import SetMatchDate from '@components/SetMatchDate';
import SetMatchScore from '@components/SetMatchScore';
import SetMatchSeason from '@components/SetMatchSeason';
import SetMyTeam from '@components/SetMyTeam';
import { useTicketForm } from '@context/TicketFormContext';
import { createTicket } from '@services/tickets';
import { useSnackBarStore } from '@store/useSnackBarStore';
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

export default function TicketForm() {
  const [formStep, setFormStep] = useState(1);
  const lastStep = stepTitles.length;
  const ticketForm = useTicketForm();
  const openSnackBar = useSnackBarStore(state => state.openSnackBar);
  const navigate = useNavigate();

  function prevStep() {
    setFormStep(prev => prev - 1);
  }

  function nextStep() {
    setFormStep(prev => prev + 1);
  }

  function validateForm() {
    if (formStep == 1) {
      const { seasons } = ticketForm;
      if (
        seasons[0] == '정규시즌' ||
        (seasons[0] == '포스트시즌' && seasons[1])
      ) {
        return true;
      }
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
      if (ticketForm.myTeam) return true;
      return false;
    }

    return true;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createTicket(ticketForm);
    openSnackBar('새로운 티켓이 등록되었습니다.');
    navigate('/');
  }

  return (
    <section>
      <form css={styles.form} onSubmit={onSubmit}>
        <h2>티켓 등록</h2>
        <ProgressIndicator step={formStep} stepTitles={stepTitles} />
        {renderTicketRegisterForm(formStep)}
        <div css={styles.formNavigation}>
          <Button
            onClick={prevStep}
            disabled={formStep <= 1}
            variant="secondary"
          >
            이전
          </Button>
          {formStep != lastStep && (
            <Button
              onClick={nextStep}
              disabled={!validateForm()}
              variant="primary"
            >
              다음
            </Button>
          )}
          {formStep == lastStep && (
            <Button type="submit" variant="primary">
              등록
            </Button>
          )}
        </div>
      </form>
    </section>
  );
}
