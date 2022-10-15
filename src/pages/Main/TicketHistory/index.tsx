import { Link } from 'react-router-dom';
import { styles } from './styles';

export default function TicketHistory() {
  return (
    <Link to="register" css={styles.registerLink}>
      티켓 등록
    </Link>
  );
}
