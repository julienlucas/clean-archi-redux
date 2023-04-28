import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { reducer } from '@andragog/store';

export const store = configureStore({
  reducer: reducer,
});

describe('Training usecases', () => {
  test('Should...', async () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toBeTruthy();
  });
});
