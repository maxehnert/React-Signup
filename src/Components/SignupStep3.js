import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { validateCC, saveToLS } from '../utils/signup'

class SignupStep3 extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (localStorage.SignupStep3) {
      const step3Values = JSON.parse(localStorage.SignupStep3)
      this.setState(step3Values)
    } else {
      this.setState({
        signupCardNumber: "",
        signupCardExp: "",
        signupCoupon: ""
      })
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    // Adds the name of the subscription
    if (name === 'signupPrice') {
      console.log(event.target.dataset.subName);
      this.setState({'signupSubName': event.target.dataset.subName})
    }

    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()

    validateCC(this.state, (validCC) => {
      if (validCC) {
        // add it to localStorage and navigate to next page
        saveToLS(this.state, 'SignupStep3')
        const path = `/signup/review-information`
        browserHistory.push(path)
      } else {
        // show error that cc info wasn't valid
      }
    })




console.log(this.state);
  }

  render() {
    return (
      <div className="row container">
        <h2 className="title">Signup Step 3 of 3</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-card-number" className="control-label">Credit Card Number</label>
              <input
                type="text"
                name="signupCardNumber"
                placeholder="•••• •••• •••• ••••"
                required
                tabIndex="1"
                className="form-control signup-card-number"
                maxLength="20"
                onChange={this.handleChange}
                defaultValue={this.state.signupCardNumber}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-cvv" className="control-label">CVV</label>
              <input
                type="text"
                name="signupCardCVV"
                placeholder="•••"
                required
                tabIndex="2"
                className="form-control signup-cvv"
                maxLength="4"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-expiration-month" className="control-label">Expiration Month / Year</label>
              <input
                type="text"
                name="signupCardExp"
                placeholder="••/••••"
                required
                tabIndex="3"
                className="form-control signup-expiration-month-year signup-card-exp"
                maxLength="7"
                onChange={this.handleChange}
                defaultValue={this.state.signupCardExp}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-coupon" className="control-label">Coupon Code</label>
              <input
                type="text"
                name="signupCoupon"
                tabIndex="4"
                className="form-control signup-coupon"
                onChange={this.handleChange}
                defaultValue={this.state.signupCoupon}/>
            </div>
            <div className="form-group">
              <div className="radio">
                <label>
                  <input
                    id="signupRadios1"
                    type="radio"
                    name="signupPrice"
                    required
                    value="29.99"
                    data-sub-name="Premium"
                    tabIndex="5"
                    className="signup-radio"
                    onChange={this.handleChange}/>
                  Premium $29.95/mo
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    id="signupRadios2"
                    type="radio"
                    name="signupPrice"
                    required
                    value="37.99"
                    data-sub-name="Multiple"
                    tabIndex="6"
                    className="signup-radio"
                    onChange={this.handleChange}/>
                  Multiple Boxes $29.95 + 7.95/mo
                </label>
              </div>
            </div>
          </div>
          <button
            tabIndex="7"
            type="submit"
            className="btn btn-default continue subscribe-btn-3">
            Review Information
          </button>
        </form>
      </div>
    )
  }
}

export default SignupStep3
