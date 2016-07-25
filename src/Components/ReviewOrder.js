import React, { Component } from 'react'
import signup from '../utils/signup'
import {UserInfo, SubInfo} from './ReviewItems'

class ReviewOrder extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('props review',props);
    console.log('state review ', this.state);

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
    const step1Values = JSON.parse(localStorage.SignupStep1)
    const step2Values = JSON.parse(localStorage.SignupStep2)
    const step3Values = JSON.parse(localStorage.SignupStep3)

    const firstSet = Object.assign({}, step1Values, {'signupAddress': step2Values.signupAddress}, {'signupAddress2': step2Values.signupAddress2}, {'signupCoupon': step3Values.signupCoupon})
    const secondSet = Object.assign({}, step2Values, step3Values)

    return (
      <div>
        <div className="review-container">
          <h2 className="title">Review Information</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="col-xs-12 col-md-6 review-container-info">
                {Object.keys(firstSet).map((key) => {
                  if (key === 'token' || key === 'signupPassword1' || key === 'signupPassword2') return
                  // console.log(key, firstSet[key])
                  return(
                    <UserInfo baseKey={key} baseValue={firstSet[key]} />
                  )
                })}
              </div>
              <div className="col-xs-12 col-md-6 review-container-info">
                {Object.keys(secondSet).map((key) => {
                  if (key === 'signupCoupon' || key === 'signupPrice' || key === 'signupSubName' || key === 'signupAddress' || key === 'signupAddress2') return
                  // console.log(key, secondSet[key])
                  return(
                    <UserInfo baseKey={key} baseValue={secondSet[key]} />
                  )
                })}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 review-container-total">
              <SubInfo baseKey={'subscriptionType'} baseValue={step3Values.signupSubName} />
              <SubInfo baseKey={'total'} baseValue={step3Values.signupPrice} />
            </div>
            <div className="col-xs-12 col-sm-12">
              <button value="submit" type="button" className="btn btn-default continue final-submit">Finalize Order</button><br/>
              <button value="submit" type="button" className="btn btn-default continue final-edit-information">Edit Information</button>
            </div>
          </div>
        </div>


        {/*<div className="review-container">
          <h2 className="title">Review Information</h2>
          <div className="row">
          <div className="col-xs-12 col-sm-12">
          <div className="col-xs-12 col-md-6 review-container-info">
          <div className="col-xs-12 col-md-12 review-fname">
          <div className="review-title review-fname-title">First Name</div>
          <div className="review-value review-fname-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-lname">
          <div className="review-title review-lname-title">Last Name</div>
          <div className="review-value review-lname-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-email">
          <div className="review-title review-email-title">Email</div>
          <div className="review-value review-email-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-phone">
          <div className="review-title review-phone-title">Phone Number</div>
          <div className="review-value review-phone-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-address">
          <div className="review-title review-address-title">Address 1</div>
          <div className="review-value review-address-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-address2">
          <div className="review-title review-address2-title">Address 2</div>
          <div className="review-value review-address2-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-coupon">
          <div className="review-title review-coupon-title">Coupon</div>
          <div className="review-value review-coupon-value"></div>
          </div>
          </div>
          <div className="col-xs-12 col-md-6 review-container-info">
          <div className="col-xs-12 col-md-12 review-city">
          <div className="review-title review-city-title">City</div>
          <div className="review-value review-city-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-state">
          <div className="review-title review-state-title">State</div>
          <div className="review-value review-state-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-zip">
          <div className="review-title review-zip-title">Zip</div>
          <div className="review-value review-zip-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-country">
          <div className="review-title review-country-title">Country</div>
          <div className="review-value review-country-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-cardNumber">
          <div className="review-title review-cardNumber-title">Credit Card Number</div>
          <div className="review-value review-cardNumber-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-ccv">
          <div className="review-title review-ccv-title">CCV</div>
          <div className="review-value review-ccv-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-expMonth">
          <div className="review-title review-expMonth-title">Exp Month</div>
          <div className="review-value review-expMonth-value"></div>
          </div>
          <div className="col-xs-12 col-md-12 review-expYear">
          <div className="review-title review-expYear-title">Exp Year</div>
          <div className="review-value review-expYear-value"></div>
          </div>
          </div>
          </div>
          <div className="col-xs-12 col-sm-12 review-container-total">
          <div className="col-xs-12 col-md-6 review-subscriptionType">
          <div className="review-title review-subscriptionType-title">Subscription</div>
          <div className="review-value review-subscriptionType-value"></div>
          </div>
          <div className="col-xs-12 col-md-6 review-total">
          <div className="review-title review-total-title">Total</div>
          <div className="review-value review-total-value"></div>
          </div>
          </div>
          <div className="col-xs-12 col-sm-12">
          <button value="submit" type="button" className="btn btn-default continue final-submit">Finalize Order</button><br/>
          <button value="submit" type="button" className="btn btn-default continue final-edit-information">Edit Information</button>
          </div>
          </div>
        </div>*/}
      </div>
    )
  }
}

export default ReviewOrder
