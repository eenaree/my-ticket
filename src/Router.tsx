import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TicketFormProvider } from '@context/TicketFormContext';
import Authenticated from '@pages/Authenticated';
import Layout from '@pages/Layout';
import Main from '@pages/Main';
import TicketRegister from '@pages/TicketRegister';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="authenticated" element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  );
}
