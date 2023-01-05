import React, { useState } from 'react';

export default function Pick() {
  // 1. 내가 푼 코드
  let [num, setNum] = useState(0);
  let [condition, setCondition] = useState(true);

  function customSetCondition(num) {
    if (num > 9) setCondition(false);
    setNum(num + 1);
  }
  // 2. 강사님 코드
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => customSetCondition(num)}>
        {condition ? '👍' : '😎'}
      </button>
      <div>{num}</div>

      {/* <span onClick={() => setCount(count + 1)}>
        {count <= 10 ? '👍' : '😎'}
      </span>
      <div>{count}</div> */}
    </div>
  );
}
