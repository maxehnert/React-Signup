import React, { Component } from 'react'
import signup from '../utils/signup'

class SignupStep3 extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    // Adds the name of the subscription
    if (name === 'signupPrice') {
      console.log(event.target.dataset.subName);
      this.setState({'signupSubName': event.target.dataset.subName})
    }

    this.setState({[name]: value})
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()

    signup.saveToLS(this.state, 'SignupStep3')


console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-card-number" className="control-label">Credit Card Number</label>
              <input type="text" name="signupCardNumber" placeholder="•••• •••• •••• ••••" required tabIndex="1" className="form-control signup-card-number" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-cvv" className="control-label">CVV</label>
              <input type="text" name="signupCardCVV" placeholder="•••"  required tabIndex="2" className="form-control signup-cvv" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-expiration-month" className="control-label">Expiration Month / Year</label>
              <input type="text" name="signupCardExp" placeholder="•• / ••••"  required tabIndex="3" className="form-control signup-expiration-month-year signup-card-exp" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-coupon" className="control-label">Coupon Code</label>
              <input type="text" name="signupCoupon" tabIndex="4" className="form-control signup-coupon" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <div className="radio">
                <label>
                  <input id="signupRadios1" type="radio" name="signupPrice" required value="29.99" data-sub-name="Premium" tabIndex="5" className="signup-radio" onChange={this.handleChange}/>Premium $29.95/mo
                </label>
              </div>
              <div className="radio">
                <label>
                  <input id="signupRadios2" type="radio" name="signupPrice" required value="37.99" data-sub-name="Multiple" tabIndex="6" className="signup-radio" onChange={this.handleChange}/>Multiple Boxes $29.95 + 7.95/mo
                </label>
              </div>
            </div>
          </div>
          <button tabIndex="7" type="submit" className="btn btn-default continue subscribe-btn-3">Review Information</button>
        </form>
      </div>
    )
  }
}

export default SignupStep3
