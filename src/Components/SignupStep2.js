import React, { Component } from 'react'
import signup from '../utils/signup'

class SignupStep2 extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    console.log('props sign2',props);
    this.state = {signupCountry: 'US'}
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault()

    signup.saveToLS(this.state, 'SignupStep2')
    const path = `/signup/step-3`
    browserHistory.push(path)

    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-address" className="control-label">Billing Address</label>
              <input
                type="text"
                name="signupAddress"
                autoComplete="address-line1"
                tabIndex="1"
                required
                className="form-control signup-address"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-address-2" className="control-label">Billing Address 2</label>
              <input
                type="text"
                name="signupAddress2"
                autoComplete="address-line2"
                tabIndex="2"
                className="form-control signup-address-2"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-city" className="control-label">Billing City</label>
              <input
                type="text"
                name="signupCity"
                tabIndex="3"
                required
                className="form-control signup-city"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-state" className="control-label">Billing State</label>
              <select name="signupState" tabIndex="4" required className="form-control signup-state"  onChange={this.handleChange}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="signup-zip" className="control-label">Billing Zip</label>
              <input
                type="text"
                name="signupZip"
                tabIndex="5"
                required
                className="form-control signup-zip"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-country" className="control-label">Billing Country</label>
              <input
                type="text"
                name="signupCountry"
                tabIndex="6"
                required
                className="form-control signup-country"
                defaultValue="US"
                onChange={this.handleChange}/>
            </div>
          </div>
          <button tabIndex="7" type="submit" className="btn btn-default continue subscribe-btn-2">Continue</button>
        </form>
      </div>
    )
  }
}

SignupStep2.propTypes = {
  signupAddress: React.PropTypes.string,
  signupAddress2: React.PropTypes.string,
  signupCity: React.PropTypes.string,
  signupZip: React.PropTypes.string,
  signupCountry: React.PropTypes.string,

};

export default SignupStep2
