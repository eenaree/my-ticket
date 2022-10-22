import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TicketFormProvider } from '~/context/TicketFormContext';
import Authenticated from '~/pages/Authenticated';
import Layout from '~/pages/Layout';
import Login from '~/pages/Login';
import Main from '~/pages/Main';
import MyTeam from '~/pages/Main/MyTeam';
import TicketHistory from '~/pages/Main/TicketHistory';
import StadiumPicker from '~/pages/Register/StadiumPicker';
import TicketForm from '~/pages/Register/TicketForm';
import RequireAuth from '~/pages/RequireAuth';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />}>
              <Route index element={<TicketHistory />} />
              <Route path="myteam" element={<MyTeam />} />
            </Route>
            <Route path="register">
              <Route index element={<StadiumPicker />} />
              <Route
                path=":teamId"
                element={
                  <TicketFormProvider>
                    <TicketForm />
                  </TicketFormProvider>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="authenticated" element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  );
}
