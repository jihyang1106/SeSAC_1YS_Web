import React from "react";
import { useState } from "react";

const ChangeObj = (props) => {
  // 배열의 인덱스 변경하는 useState
  const [idx, setIdx] = useState(0);
  // 배열을 objArr에 담기
  const objArr = props.objArr[idx];

  // 버튼을 누를 때 idx 변경
  const changeProfile = () => {
    // idx가 arr의 마지막 변수 일 때
    if (idx === props.objArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };
  return (
    <div>
      <div>
        <h1>이름 : {objArr.name}</h1>
        <h2>나이 : {objArr.age}</h2>
        <h2>별명 : {objArr.nickName}</h2>
      </div>
      <button onClick={changeProfile}>프로필 변경하기</button>
    </div>
  );
};

export default ChangeObj;
