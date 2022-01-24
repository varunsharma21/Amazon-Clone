import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    // BEM convention
    // React Router is a standard library for routing in React.
    // It enables the navigation among views of various components in a React Application,
    // allows changing the browser URL, and keeps the UI in sync with the URL.
    <Router>
      <div className="app">
        
        {/* We wrap switch around 'Route's to switch from one page to another acc. to path */}
        <Switch>
          {/* change page using route according to path. */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Route at last is the default one. */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
