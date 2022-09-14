import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authenticated from '@pages/Authenticated';
import Main from '@pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="authenticated" element={<Authenticated />} />
      </Routes>
    </BrowserRouter>
  );
}
