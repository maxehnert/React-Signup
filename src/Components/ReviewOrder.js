import React, { Component } from 'react'
import signup from '../utils/signup'

class ReviewOrder extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('props review',props);
    console.log('state review ', state);
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState({[name]: value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()

    signup.saveToLS(this.state, 'ReviewOrder')


console.log(this.state);
  }

  render() {
    return (
      <div>
        <div class="review-container">
          <h2 class="title">Review Information</h2>
          <div class="row">
            <div class="col-xs-12 col-sm-12">
              <div class="col-xs-12 col-md-6 review-container-info">
                <div class="col-xs-12 col-md-12 review-fname">
                  <div class="review-title review-fname-title">First Name</div>
                  <div class="review-value review-fname-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-lname">
                  <div class="review-title review-lname-title">Last Name</div>
                  <div class="review-value review-lname-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-email">
                  <div class="review-title review-email-title">Email</div>
                  <div class="review-value review-email-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-phone">
                  <div class="review-title review-phone-title">Phone Number</div>
                  <div class="review-value review-phone-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-address">
                  <div class="review-title review-address-title">Address 1</div>
                  <div class="review-value review-address-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-address2">
                  <div class="review-title review-address2-title">Address 2</div>
                  <div class="review-value review-address2-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-coupon">
                  <div class="review-title review-coupon-title">Coupon</div>
                  <div class="review-value review-coupon-value"></div>
                </div>
              </div>
              <div class="col-xs-12 col-md-6 review-container-info">
                <div class="col-xs-12 col-md-12 review-city">
                  <div class="review-title review-city-title">City</div>
                  <div class="review-value review-city-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-state">
                  <div class="review-title review-state-title">State</div>
                  <div class="review-value review-state-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-zip">
                  <div class="review-title review-zip-title">Zip</div>
                  <div class="review-value review-zip-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-country">
                  <div class="review-title review-country-title">Country</div>
                  <div class="review-value review-country-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-cardNumber">
                  <div class="review-title review-cardNumber-title">Credit Card Number</div>
                  <div class="review-value review-cardNumber-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-ccv">
                  <div class="review-title review-ccv-title">CCV</div>
                  <div class="review-value review-ccv-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-expMonth">
                  <div class="review-title review-expMonth-title">Exp Month</div>
                  <div class="review-value review-expMonth-value"></div>
                </div>
                <div class="col-xs-12 col-md-12 review-expYear">
                  <div class="review-title review-expYear-title">Exp Year</div>
                  <div class="review-value review-expYear-value"></div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 review-container-total">
              <div class="col-xs-12 col-md-6 review-subscriptionType">
                <div class="review-title review-subscriptionType-title">Subscription</div>
                <div class="review-value review-subscriptionType-value"></div>
              </div>
              <div class="col-xs-12 col-md-6 review-total">
                <div class="review-title review-total-title">Total</div>
                <div class="review-value review-total-value"></div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <button value="submit" type="button" class="btn btn-default continue final-submit">Finalize Order</button><br/>
              <button value="submit" type="button" class="btn btn-default continue final-edit-information">Edit Information</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewOrder
