import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div>
          <h1>App Placeholder</h1>
        </div>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
