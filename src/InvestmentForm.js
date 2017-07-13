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
      if (this.state.errors[e.target.name]) {
        const errors = Object.assign({}, this.state.errors)
        delete errors[e.target.name]
        this.setState(
          { [e.target.name]: e.target.value,
            errors,
          },
        )
      } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }

    this.handleSubmit = (e) => {
      e.preventDefault()
      const errors = {}
      if (this.state.title === '') errors.title = 'Investment Title, please'
      if (this.state.category === '') errors.category = 'Investment Category, please'
      if (this.state.costprice === '' || this.state.costprice < 0.0) errors.costprice = 'Positive Investment Cost Price, please'
      if (this.state.sellingprice === '' || this.state.sellingprice < 0.0) errors.sellingprice = 'Positive Investment Selling Price, please'
      this.setState({ errors })
    }
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>

        <h1>Add new investment</h1>

        <div className={classnames('field', { error: !!this.state.errors.title })}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.category })}>
          <label htmlFor="category">Category</label>
          <input
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            id="category"
          />
          <span>{this.state.errors.category}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.costprice })}>
          <label htmlFor="costprice">Cost Price</label>
          <input
            type="number"
            name="costprice"
            value={this.state.costprice}
            onChange={this.handleChange}
            id="costprice"
          />
          <span>{this.state.errors.costprice}</span>
        </div>

        <div className={classnames('field', { error: !!this.state.errors.sellingprice })}>
          <label htmlFor="sellingprice">Selling Price</label>
          <input
            type="number"
            name="sellingprice"
            value={this.state.sellingprice}
            onChange={this.handleChange}
            id="sellingprice"
          />
          <span>{this.state.errors.sellingprice}</span>
        </div>

        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    )
  }

}

export default InvestmentForm
