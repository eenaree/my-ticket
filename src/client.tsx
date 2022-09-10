import { render } from 'react-dom';
import GlobalStyles from '@styles/Global';
import App from './App';

const container = document.querySelector('#root');

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  container
);
