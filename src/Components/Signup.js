import React, { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Signup
