import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '코딩온' });
  console.log(state);
  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'codingon';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로 변환
      </button>
      <div>{state.teacher}</div>
    </div>
  );
}
