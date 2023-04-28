import { StrictMode } from 'react';

import { store } from '@andragog/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

const render = () =>
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    document.getElementById('andragog-root')
  );

console.log(
  'Andragog Release: %s',
  process.env.BUILD_VERSION ?? process.env.APP_VERSION
);
render();
