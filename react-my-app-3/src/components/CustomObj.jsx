import React from "react";

const CustomObj = (props) => {
  if (props.obj) {
    const { name, age, nickName } = props.obj;
    return (
      <div>
        <h1>이름 : {name}</h1>
        <h2>나이 : {age}</h2>
        <h3>별명 : {nickName}</h3>
      </div>
    );
  } else {
    return <div>데이터가 없어요</div>;
  }
};

export default CustomObj;
