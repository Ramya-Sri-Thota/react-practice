import React, { Component } from "react";
class ChildComponent extends Component {
  render() {
    return (
      <>
        <div>{this.props.count}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement
        
        }>decrement</button>
      </>
    );
  }
}
export default ChildComponent;
