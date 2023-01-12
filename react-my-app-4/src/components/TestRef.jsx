import React, { useState, useRef } from "react";

export default function TestRef() {
  const [text, setText] = useState("안녕하세요");
  const inputValues = useRef();

  const onChangeText = () => {
    setText(inputValues.current.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input type="text" ref={inputValues} onChange={onChangeText} />
    </div>
  );
}
