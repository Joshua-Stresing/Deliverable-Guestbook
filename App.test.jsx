import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './src/App';
import { UserProvider } from './src/context/context';

describe('main', () => {
  it('main has', async () => {
    render(
      <UserProvider>
        <MemoryRouter>
          <App />;
        </MemoryRouter>
      </UserProvider>
    );
  });
});
