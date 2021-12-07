import React, { Component } from "react";
class Rachana1Practise extends Component {
  render() {
    return (
      <>
        <div>hi hello</div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </>
    );
  }
}
export default Rachana1Practise;
