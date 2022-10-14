import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import SnackBar from '@components/SnackBar';
import { styles } from './styles';

export default function Layout() {
  return (
    <>
      <SnackBar />
      <Header />
      <main css={styles.inner}>
        <Outlet />
      </main>
    </>
  );
}
