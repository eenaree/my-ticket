import { Outlet } from 'react-router-dom';
import NavBar from '~/components/NavBar';

export default function Main() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
