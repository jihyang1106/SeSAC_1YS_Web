import React, { Component } from "react";
import PropTypes from "prop-types";

const valid = () => {
  console.log("콘솔 띄우기 성공!");
};
class Text extends Component {
  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button
          onClick={() => {
            valid();
          }}
        >
          콘솔 메세지
        </button>
      </div>
    );
  }
}

export default Text;
