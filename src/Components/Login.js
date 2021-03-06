import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import auth from '../utils/auth'

class Login extends Component {
  constructor(props) {
   super();

   this.state = {
     error: false,
    //  emailValue: "",
    //  passwordValue: "",
    //  tokenValue: ""
   };

   this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    console.log(event);
    // this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault()
console.log('refs ',this.refs, this.refs.token.value.length);
    const email = this.refs.email.value
    const pass = this.refs.password.value
    const token = this.refs.token.value

    auth.login(email, pass, token, (loggedIn) => {
      console.log('loggedIn', loggedIn);
      if (!loggedIn) {
        return this.setState({ error: true })
      } else {
        this.setState({error: false})
        const path = `/manage-subscription`
        browserHistory.push(path)
      }
    })
  }

  render() {
    return (
      <div className="row container">
        <h2 className="title">Login</h2>
        <p className="description">Enter your email address and password to Login</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="login-email"
              placeholder="Email"
              required
              ref="email"
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              className="form-control"
              id="login-password"
              placeholder="Password"
              required
              ref="password"
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="login-token">Token *Optional</label>
            <input
              type="text"
              className="form-control"
              id="login-token"
              placeholder="Token"
              ref="token"
              onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-default continue">login</button>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
        {this.props.children}
      </div>
    )
  }
}

export default Login;
