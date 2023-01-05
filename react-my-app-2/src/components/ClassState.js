import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: '코딩온',
  //     };
  //   }
  state = {
    teacher: '코딩온',
  };

  render() {
    const { teacher } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'codingon' })}>
          영어로 변경
        </button>
        <div>{teacher}</div>
      </div>
    );
  }
}
