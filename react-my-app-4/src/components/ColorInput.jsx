import React, { useRef } from "react";

export default function ColorInput() {
  const userInput = useRef();
  const divEl = useRef();
  const applyCSS = () => {
    divEl.current.style.backgroundColor = userInput.current.value;
  };
  return (
    <div ref={divEl}>
      <input ref={userInput} />
      <br />
      <button onClick={applyCSS}>색 적용</button>
    </div>
  );
}
