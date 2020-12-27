import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login.js';


const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/checkout" component={Checkout}>
              <Header />
              <Checkout />
            </Route>
            <Route path="/" component={Home} >
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
