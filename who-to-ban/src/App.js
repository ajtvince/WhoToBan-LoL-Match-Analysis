import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import AccountPage from './components/Account';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Router>
      <Switch>
        <Route exact path="/">
          <div>home</div>
        </Route>
        <Route path="/na/:accountID">
          <AccountPage />
        </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
