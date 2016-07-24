import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import auth from '../utils/auth'

class ManageSub extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      firstName: '',
      sub: ''
    }
  }

  componentDidMount() {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user)

      this.setState({
        email: user.email,
        firstName: user.firstName,
        sub: user.role[0]
      })
    }
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <div>
        <div>
        <div>Current Subscription</div>
        <div>{this.state.sub}</div>
        </div>
        <div>
        <div>First Name</div>
        <div>{this.state.firstName}</div>
        </div>
        {this.props.children}
        <form>
        </form>
      </div>
    )
  }
}

export default ManageSub
