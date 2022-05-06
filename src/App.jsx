import Auth from './views/Auth/Auth';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import EntryList from './views/EntryList';
// import { useState } from 'react';
// import { getUser } from './services/user';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <EntryList />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
