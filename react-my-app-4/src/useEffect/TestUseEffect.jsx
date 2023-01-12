import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("입력하세요!");
  const inputVal = useRef();
  let textStr;

  useEffect(() => {
    console.log("😊렌더링");
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };
  const onChange = () => {
    setText(inputVal.current.value);
    console.log("💻");
  };
  const textShow = () => {
    textStr = inputVal.current.value;
    alert(textStr);
  };
  return (
    <>
      {count}
      <br />
      <button onClick={onClick}>+1</button>
      <br />
      <h1>{text}</h1>
      <input type="text" ref={inputVal} onChange={onChange} />
      <button onClick={textShow}>버튼</button>
    </>
  );
}
