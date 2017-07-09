import React from 'react'
import { PropTypes } from 'prop-types'

const InvestmentList = ({ investments }) => {
  const emptyMessage = (<p>Investments collection is empty</p>)
  const investmentsList = (<h1>Investments List....</h1>)
  return (<div>{investments.length === 0 ? emptyMessage : investmentsList}</div>)
}

InvestmentList.propTypes = {
  investments: PropTypes.array.isRequired,
}

export default InvestmentList
