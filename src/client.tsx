import { render } from 'react-dom';
import { ModalProvider } from '@context/ModalContext';
import GlobalStyles from '@styles/Global';
import App from './App';

const container = document.querySelector('#root');

render(
  <>
    <GlobalStyles />
    <ModalProvider>
      <App />
    </ModalProvider>
  </>,
  container
);
