import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';
import SnackBar from '~/components/SnackBar';

export default function Layout() {
  return (
    <>
      <SnackBar />
      <Header />
      <Outlet />
    </>
  );
}
