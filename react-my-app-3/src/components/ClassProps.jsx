import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    const { name, age, nickName } = this.props;
    return (
      <div>
        <h2>이름 : {name}</h2>
        <h2>나이 : {age}</h2>
        <h3>별명 : {nickName}</h3>
      </div>
    );
  }
}

export default ClassProps;
