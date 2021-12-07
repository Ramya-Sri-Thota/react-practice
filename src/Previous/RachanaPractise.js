import React, { Component } from "react";
import Rachana1Practise from "./Rachana1Practise";
class RachanaPractise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>hii heelo</div>
        <h1>{this.props.text}</h1>
        <Rachana1Practise
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </>
    );
  }
}
export default RachanaPractise;
