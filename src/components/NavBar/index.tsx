import Button from '@components/common/Button';
import { useUserStore } from '@store/useUserStore';
import { styles } from './styles';

export default function NavBar() {
  const logout = useUserStore(state => state.logout);

  return (
    <nav>
      <ul css={styles.navList}>
        <li>
          <Button onClick={logout}>로그아웃</Button>
        </li>
      </ul>
    </nav>
  );
}
