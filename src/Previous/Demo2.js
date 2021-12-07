import React, { Component } from "react";
class Demo2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h2>{this.state.count}</h2>

        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}
export default Demo2;
