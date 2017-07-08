import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import GamesPage from './GamesPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/games">Games</Link>
        </div>

        <Route exact path="/games" component={GamesPage} />
      </div>
    );
  }
}

export default App;
