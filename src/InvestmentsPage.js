import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import InvestmentsList from './InvestmentsList'
import fetchInvestments from './actions'

class InvestmentsPage extends Component {
  componentDidMount() {
    this.props.fetchInvestments()
  }
  render() {
    return (
      <div>
        <h1>InvestmentsPage Listing.....</h1>
        <InvestmentsList investments={this.props.investments} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    investments: state.investments,
  }
}

InvestmentsPage.propTypes = {
  investments: PropTypes.array.isRequired,
  fetchInvestments: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { fetchInvestments })(InvestmentsPage)
