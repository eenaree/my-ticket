import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authenticated from '@pages/Authenticated';
import Layout from '@pages/Layout';
import Main from '@pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="register">
            <Route path=":team" />
          </Route>
        </Route>
        <Route path="authenticated" element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  );
}
