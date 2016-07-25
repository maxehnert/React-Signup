import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { saveToLS } from '../utils/signup'

class SignupStep1 extends Component {
  constructor(props) {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    if (localStorage.SignupStep1) {
      const step1Values = JSON.parse(localStorage.SignupStep1)
      this.setState(step1Values)
    } else {
      this.setState({
        signupEmail: "",
        signupFirstName: "",
        signupLastName: "",
        signupPassword1: "",
        signupPassword2: "",
        signupPhone: "",
        token: ""
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

    if (this.state.signupPassword1 !== this.state.signupPassword1) {
      // throw an error to fix the form
    } else {
      saveToLS(this.state, 'SignupStep1')
      const path = `/signup/step-2`
      browserHistory.push(path)
    }
  }

  render() {
    console.log('render ',this.state);
    return (
      <div className="row container">
        <h2 className="title">Signup Step 1 of 3</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-firstName" className="control-label">First Name</label>
              <input
                type="text"
                name="signupFirstName"
                autoComplete="fname"
                required
                tabIndex="1"
                className="form-control signup-firstName"
                ref="firstName"
                onChange={this.handleChange}
                defaultValue={this.state.signupFirstName}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-lastName" className="control-label">Last Name</label>
              <input
                type="text"
                name="signupLastName"
                autoComplete="fname"
                required
                tabIndex="2"
                className="form-control signup-lastName"
                ref="lastName"
                onChange={this.handleChange}
                defaultValue={this.state.signupLastName}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-email" className="control-label">Email</label>
              <input
                type="email"
                name="signupEmail"
                autoComplete="email"
                required
                tabIndex="3"
                className="form-control signup-email"
                ref="email"
                onChange={this.handleChange}
                defaultValue={this.state.signupEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-phone" className="control-label">Phone Number</label>
              <input
                type="tel"
                name="signupPhone"
                autoComplete="tel"
                required
                tabIndex="4"
                className="form-control signup-phone"
                ref="phone"
                onChange={this.handleChange}
                defaultValue={this.state.signupPhone}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-password-1" className="control-label">Password</label>
              <input
                type="password"
                name="signupPassword1"
                required
                tabIndex="5"
                className="form-control signup-password-1"
                ref="password1"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="signup-password-2" className="control-label">Enter Password Again</label>
              <input
                type="password"
                name="signupPassword2"
                required
                tabIndex="6"
                className="form-control signup-password-2"
                ref="password2"
                onChange={this.handleChange}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="signup-token" className="control-label">Token</label>
              <input
                type="text"
                name="token"
                required
                tabIndex="7"
                className="form-control signup-token"
                ref="token"
                onChange={this.handleChange}
                defaultValue={this.state.token}/>
            </div>
          </div>
          <button tabIndex="8" type="submit" className="btn btn-default continue subscribe-btn-1">Continue</button>
        </form>
      </div>
    )
  }
}

export default SignupStep1
