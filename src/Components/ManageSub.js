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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user)

      this.setState({
        error: false,
        email: user.email,
        firstName: user.firstName,
        sub: user.role[0]
      })
    } else {
      // prevent page access unless logged in
      browserHistory.push('/')
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    const optionsRadiosValue = event.target.elements.optionsRadios.value
    console.log(optionsRadiosValue);
console.log(user);
    auth.updateSubscription(optionsRadiosValue, referenceId, (g2g) => {
      console.log('g2g?', g2g);
      if (!g2g) {
        return this.setState({ error: true })
      } else {
        this.setState({error: false})
      }
    })
  }

  render() {
    console.log('props', this.props);
    console.log('state', this.state);
    return (
      <div className="row container">
        <div>
          <div>First Name</div>
          <div>{this.state.firstName}</div>
          <div>Last Name</div>
          <div>{this.state.lastName}</div>
          <div>Email</div>
          <div>{this.state.email}</div>
        </div>
        <div>
          <div>Current Subscription</div>
          <div>{this.state.sub}</div>
        </div>
        <div className="col-xs-12 form-row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="radio">
                <label>
                  <input
                    id="optionsRadios1"
                    type="radio"
                    name="optionsRadios"
                    value="500"
                    required
                    tabIndex="1"/>
                  $500 Renew Subscription
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    id="optionsRadios3"
                    type="radio"
                    name="optionsRadios"
                    value="0"
                    required
                    tabIndex="2"/>
                  Cancel Subscription
                </label>
              </div>
            </div>
            <button tabIndex="4" type="submit" className="btn btn-default continue change-sub-btn">Update Subscription</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ManageSub
