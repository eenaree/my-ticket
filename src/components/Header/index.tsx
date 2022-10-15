import { Link } from 'react-router-dom';
import Button from '@components/common/Button';
import { useUserStore } from '@store/.';
import { styles } from './styles';

export default function Header() {
  const logout = useUserStore(state => state.logout);
  return (
    <header>
      <div css={styles.headerInner}>
        <h1 css={styles.logo}>
          <Link to="/">MyTicket</Link>
        </h1>
        <Button onClick={logout}>로그아웃</Button>
      </div>
    </header>
  );
}
