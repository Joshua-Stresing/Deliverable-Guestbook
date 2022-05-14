import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from './context/context';

render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
