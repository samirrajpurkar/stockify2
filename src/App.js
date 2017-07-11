import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import InvestmentsPage from './InvestmentsPage'
import InvestmentForm from './InvestmentForm'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/home">Home</Link>
          <Link className="item" to="/investments">
            Investments
          </Link>
          <Link className="item" to="/investments/new">
            Add New Investments
          </Link>
        </div>
        <Route exact path="/investments" component={InvestmentsPage} />
        <Route exact path="/investments/new" component={InvestmentForm} />
      </div>
    )
  }
}

export default App
