import { Link } from 'react-router-dom';
import MyTicketList from '@components/MyTicketList';
import { styles } from './styles';

export default function TicketHistory() {
  return (
    <section css={styles.wrapper}>
      <MyTicketList />
      <Link to="register" css={styles.registerLink}>
        티켓 등록
      </Link>
    </section>
  );
}
