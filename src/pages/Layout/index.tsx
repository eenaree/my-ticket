import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import { styles } from './styles';

export default function Layout() {
  return (
    <>
      <Header />
      <main css={styles.inner}>
        <Outlet />
      </main>
    </>
  );
}
