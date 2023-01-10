import React, { Component } from "react";
import img from "../sample.jpg";

const style = { color: "orange", fontSize: "40px", marginTop: "20px" };
export default class Test2 extends Component {
  render() {
    return (
      <div style={style}>
        <h2>안녕하세요</h2>
        <img src={img} />
      </div>
    );
  }
}
