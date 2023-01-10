import React, { Component } from "react";

const name = "이지향";
const myStyle = {
  backgroundColor: "blue",
  color: "orange",
  fontSize: "40px",
  padding: "12px",
};

export default class Test extends Component {
  render() {
    return <div style={myStyle}>{name}</div>;
  }
}
