// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react'
import NavLink from './Components/NavLink'
import auth from './utils/auth'

class App extends Component {
  constructor(props) {
    super()
    this.state = {loggedIn: auth.loggedIn()}
  }

  updateAuth(loggedIn) {
    this.setState({
      loggedIn: !!loggedIn
    })
  }

  componentWillMount() {
    auth.onChange = this.updateAuth.bind(this)
    auth.login()
  }

  render() {
    console.log('App');
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>
            {this.state.loggedIn ? (
              <NavLink to="/logout">Log out</NavLink>
            ) : (
              <NavLink to="/login">Sign in</NavLink>
            )}
          </li>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
};

export default App;
