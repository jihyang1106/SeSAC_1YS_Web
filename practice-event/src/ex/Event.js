import React, { Component } from "react";

export default class Event extends Component {
  state = {
    username: "",
    msg: "",
  };

  // 기본 input 값
  eventChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // 버튼을 클릭하면 value값 삭제
  eventClick = () => {
    alert(this.state.username + ":" + this.state.msg);
    this.setState({
      username: "",
      msg: "",
    });
  };

  eventKeyPress = (e) => {
    if (e.key === "Enter") {
      this.eventClick();
    }
  };
  render() {
    return (
      <div>
        <h1>리액트의 이벤트</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자이름"
          value={this.state.username}
          onChange={this.eventChange}
        />
        <input
          type="text"
          name="msg"
          placeholder="입력하세요"
          value={this.state.msg}
          onChange={this.eventChange}
          onKeyPress={this.eventKeyPress}
        />
        <button onClick={this.eventClick}>클릭</button>
      </div>
    );
  }
}
