import React, { Component } from 'react'
// import auth from '../utils/auth'
import NavLink from './NavLink'

class Home extends Component {

  render() {
    return (
      <div>
        <NavLink to="/signup">
          <button type="submit" className="btn btn-default">Sign Up</button>
        </NavLink>
        <NavLink to="/login">
          <button type="submit" className="btn btn-default">Login</button>
        </NavLink>
      </div>
    )
  }
}

export default Home;
