import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { saveToLS } from '../utils/signup'

class SignupStep2 extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (localStorage.SignupStep2) {
      const step2Values = JSON.parse(localStorage.SignupStep2)
      this.setState(step2Values)
      console.log(this.state);
    } else {
      this.setState({
        signupAddress: "",
        signupAddress2: "",
        signupCity: "",
        signupState: "",
        signupZip: "",
        signupCountry: "US"
      })
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault()

    saveToLS(this.state, 'SignupStep2')
    const path = `/signup/step-3`
    browserHistory.push(path)
  }

  render() {
    return (
      <div className="row container">
        <h2 className="title">Signup Step 2 of 3</h2>
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
                onChange={this.handleChange}
                defaultValue={this.state.signupAddress}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-address-2" className="control-label">Billing Address 2</label>
              <input
                type="text"
                name="signupAddress2"
                autoComplete="address-line2"
                tabIndex="2"
                className="form-control signup-address-2"
                onChange={this.handleChange}
                defaultValue={this.state.signupAddress2}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-city" className="control-label">Billing City</label>
              <input
                type="text"
                name="signupCity"
                tabIndex="3"
                required
                className="form-control signup-city"
                onChange={this.handleChange}
                defaultValue={this.state.signupCity}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-state" className="control-label">Billing State</label>
              <select name="signupState" tabIndex="4" required className="form-control signup-state"  onChange={this.handleChange} defaultValue={this.state.signupState}>
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
                onChange={this.handleChange}
                defaultValue={this.state.signupZip}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-country" className="control-label">Billing Country</label>
              <input
                type="text"
                name="signupCountry"
                tabIndex="6"
                required
                className="form-control signup-country"
                onChange={this.handleChange}
                defaultValue={this.state.signupCountry}/>
            </div>
          </div>
          <button tabIndex="7" type="submit" className="btn btn-default continue subscribe-btn-2">Continue</button>
        </form>
      </div>
    )
  }
}

export default SignupStep2
