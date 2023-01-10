import React, { Component } from "react";

export default class Handler_ex extends Component {
  state = {
    msg: "Hello World!",
  };

  onClick = () => {
    this.setState(() => ({
      msg: "Goodbye World!",
    }));
  };
  render() {
    const { msg } = this.state;

    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}
