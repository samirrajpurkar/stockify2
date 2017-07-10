import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import InvestmentsPage from './InvestmentsPage'


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/home">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/investments">
            Investments
          </Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/investments/new">
            Add New Investments
          </Link>
        </div>
        <Route exact path="/investments" component={InvestmentsPage} />
      </div>
    )
  }
}

export default App
