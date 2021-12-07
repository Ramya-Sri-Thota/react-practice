import React, { Component } from "react";
class DemoFun3 extends Component {
  render() {
    return (
      <>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.Increment}>Increment</button>
        <button onClick={this.props.Decrement}>Decrement</button>
      </>
    );
  }
}
export default DemoFun3;
