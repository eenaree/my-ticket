import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '~/store';

export default function RequireAuth() {
  const { user } = useUserStore();
  return user ? <Outlet /> : <Navigate to="login" replace />;
}
