import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
