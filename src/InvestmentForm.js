import React, { Component } from 'react'
import classnames from 'classnames'

class InvestmentForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      costprice: 0.0,
      sellingprice: 0.0,
      errors: {},
    }
    this.handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    this.handleSubmit = (e) => {
      e.preventDefault()
      const errors = {}
      if (this.state.title === '') errors.title = "Can't be empty"
      if (this.state.category === '') errors.category = "Can't be empty"
      if (this.state.costprice === '') errors.category = "Can't be empty"
      if (this.state.sellingprice === '') errors.sellingprice = "Can't be empty"
      this.setState({ errors })
    }
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

        <h1>Add new investment</h1>

        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
          <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            id="category"
          />
        </div>

        <div className="field">
          <label htmlFor="costprice">Cost Price</label>
          <input
            name="costprice"
            value={this.state.costprice}
            onChange={this.handleChange}
            id="costprice"
          />
        </div>

        <div className="field">
          <label htmlFor="sellingprice">Selling Price</label>
          <input
            name="sellingprice"
            value={this.state.sellingprice}
            onChange={this.handleChange}
            id="sellingprice"
          />
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    )
  }

}

export default InvestmentForm
