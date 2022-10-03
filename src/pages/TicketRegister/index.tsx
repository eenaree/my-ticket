import { useState } from 'react';
import Button from '@components/common/Button';
import SetMatchDate from '@components/SetMatchDate';
import { styles } from './styles';

function renderTicketRegisterForm(step: number) {
  switch (step) {
    case 1:
      return <SetMatchDate />;
  }
}

export default function TicketRegister() {
  const [formStep, setFormStep] = useState(1);

  function prevStep() {
    setFormStep(prev => prev - 1);
  }

  function nextStep() {
    setFormStep(prev => prev + 1);
  }

  return (
    <section css={styles.wrapper}>
      <h2>티켓 등록</h2>
      <form>
        {renderTicketRegisterForm(formStep)}
        <div>
          <Button onClick={prevStep}>이전</Button>
          <Button onClick={nextStep}>다음</Button>
        </div>
      </form>
    </section>
  );
}
