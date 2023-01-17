import React from "react";

export default function ProfileComponent({ name, age, nickname }) {
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h1>나이 : {age}</h1>
      <h1>별명 : {nickname}</h1>
      <hr />
    </div>
  );
}
