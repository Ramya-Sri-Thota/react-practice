import React, { Component } from "react";
import Buttons from "./buttons";
class PracticeIncrement extends Component {
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
        <Buttons
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </>
    );
  }
}
export default PracticeIncrement;
