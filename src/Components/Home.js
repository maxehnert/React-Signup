import React, { Component } from 'react'
import NavLink from './NavLink'

class Home extends Component {

  render() {
    return (
      <div className="row container">
        <h2>Login or Signup</h2>
        <NavLink to="/login">
          <button type="submit" className="btn btn-default continue login-start-btn">Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button type="submit" className="btn btn-default continue">Sign Up</button>
        </NavLink>
      </div>
    )
  }
}

export default Home;
