import React, { useRef } from "react";

export default function RefDOM() {
  const green = useRef();
  const yellow = useRef();
  const inputEl = useRef();

  const applyCSS = () => {
    green.current.style.backgroundColor = "green";
    yellow.current.style.backgroundColor = "yellow";
  };

  const clearInput = () => {
    inputEl.current.value = "";
  };

  return (
    <div>
      <h1 ref={green}>Green</h1>
      <h1 ref={yellow}>yellow</h1>
      <input ref={inputEl} />
      <br />
      <button onClick={applyCSS}>CSS 적용</button>
      <button onClick={clearInput}>Input initialize</button>
    </div>
  );
}
