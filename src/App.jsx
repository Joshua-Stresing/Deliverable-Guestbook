import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { useState } from 'react';
// import { getUser } from './services/user';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
