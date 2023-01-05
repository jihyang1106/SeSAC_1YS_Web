import React, { useState } from 'react';

export default function StateVariable() {
  const [state, setState] = useState(0);
  let variable = 0;
  const setVariable = () => {
    variable++;
    console.log(`state: ${state} / variable : ${variable}`);
  };
  return (
    <div>
      {state} / {variable}
      <br />
      <button
        onClick={() => {
          setState(state + 1);
          setVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
