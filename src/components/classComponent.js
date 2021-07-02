import React, { Component } from "react"

class Class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true,
    }
  } //i want to render namaste hardik if is logged in is true
  //else render namaste guest if the user is not logged in
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1> Namaste Hardik</h1>
        ) : (
          <h1>Namaste Guest</h1>
        )}
      </div>
    )
  }
}

export default Class
