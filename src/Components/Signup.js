import React, { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super()
    console.log('props signup ', props);
console.log('state signup ', this.state);

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
