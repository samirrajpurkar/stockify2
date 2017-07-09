import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import InvestmentsPage from './InvestmentsPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/investments">investments</Link>
        </div>

        <Route exact path="/investments" component={InvestmentsPage} />
      </div>
    )
  }
}

export default App
