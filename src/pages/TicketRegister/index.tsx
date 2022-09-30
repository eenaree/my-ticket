import SetMatchDate from '@components/SetMatchDate';
import { styles } from './styles';

export default function TicketRegister() {
  return (
    <section css={styles.wrapper}>
      <h2>티켓 등록</h2>
      <SetMatchDate />
    </section>
  );
}
