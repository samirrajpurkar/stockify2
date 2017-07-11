import React, { Component } from 'react'

class InvestmentForm extends Component {

  render() {
    return (
      <form className="ui form">

        <h1>Add new investment</h1>

        <div className="field">
          <label htmlFor="title">Title</label>
          <input id="title" />
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
          <input id="category" />
        </div>

        <div className="field">
          <label htmlFor="costprice">Cost Price</label>
          <input id="costprice" />
        </div>

        <div className="field">
          <label htmlFor="sellingprice">Selling Price</label>
          <input id="sellingprice" />
        </div>

      </form>
    )
  }

}

export default InvestmentForm
