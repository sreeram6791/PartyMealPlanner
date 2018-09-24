import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Landing, GuestList, Results} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to PartyPlanner!</h1>
        </header>
        <main>

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/guest-list" component={GuestList} />
            <Route path="/results" component={Results} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
