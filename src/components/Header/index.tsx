import { Link } from 'react-router-dom';
import NavBar from '@components/NavBar';
import { styles } from './styles';

export default function Header() {
  return (
    <header>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        <NavBar />
      </div>
    </header>
  );
}
