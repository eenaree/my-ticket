import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TicketFormProvider } from '@context/TicketFormContext';
import Authenticated from '@pages/Authenticated';
import Layout from '@pages/Layout';
import Login from '@pages/Login';
import Main from '@pages/Main';
import RequireAuth from '@pages/RequireAuth';
import TicketRegister from '@pages/TicketRegister';
import { useUserStore } from './store';

export default function Router() {
  const loginUser = useUserStore(state => state.loginUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route
              path="register"
              element={
                <TicketFormProvider>
                  <TicketRegister />
                </TicketFormProvider>
              }
            />
          </Route>
        </Route>
        <Route path="login" element={<Login onSuccess={loginUser} />} />
        <Route path="authenticated" element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  );
}
