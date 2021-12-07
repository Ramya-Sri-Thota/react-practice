import React, { Component } from "react";
import DemoFun2 from "./DemoFun2";
import DemoFun3 from "./DemoFun3";

class Demo11 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <DemoFun3
          count={this.state.count}
          Increment={this.Increment}
          Decrement={this.Decrement}
        />
        <DemoFun2 count={this.state.count} />
      </div>
    );
  }
}

export default Demo11;
