import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Landing, GuestList} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/guest-list" component={GuestList} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
