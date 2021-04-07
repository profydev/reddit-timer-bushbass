import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Search from './pages/Search';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <div>
          <h1>App Placeholder</h1>
        </div>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/howitworks">
            <HowItWorks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
