import React, { Component } from "react";

class TextChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ramya",
    };
  }
  handleChange = () => {
    this.setState({ name: "rachana" });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleChange}>Click me</button>
      </>
    );
  }
}

export default TextChange;
