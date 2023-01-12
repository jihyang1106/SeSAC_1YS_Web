import React, { useState, useRef } from "react";

export default function Calculator() {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const random = Math.floor(Math.random() * 3) + 1;
  let operator = "";
  let result;
  const inputEl = useRef();

  if (random === 1) {
    operator = "+";
    result = num1 + num2;
  } else if (random === 2) {
    operator = "-";
    result = num1 - num2;
  } else {
    operator = "X";
    result = num1 * num2;
  }

  const [render, setRender] = useState(false);
  const submitResult = () => {
    if (result === Number(inputEl.current.value)) {
      alert("정답입니다.");
      inputEl.current.value = "";
      setRender(!render);
    } else {
      alert("틀렸습니다. 다시 입력해주세요.");
      inputEl.current.value = "";
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      //   submitResult();
    }
  };
  return (
    <div>
      <h1>
        {num1} {operator} {num2}
      </h1>
      <input type="number" ref={inputEl} onKeyPress={onKeyPress} />
      <button onClick={submitResult}>정답 제출!</button>
    </div>
  );
}
