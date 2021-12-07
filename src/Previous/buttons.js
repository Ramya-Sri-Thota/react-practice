import React, { Component } from "react";
class Buttons extends Component {
  render() {
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.props.increment}>INCREMENT</button>
        <button onClick={this.props.decrement}>DECREMENT</button>
      </>
    );
  }
}
export default Buttons;
