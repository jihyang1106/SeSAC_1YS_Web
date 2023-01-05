import React, { useState } from 'react';

export default function ArrayState() {
  const [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      <div>{state}</div>
      <button
        onClick={() => {
          setState([1]);
          //   state[0] = 1;
          //   setState([...state]);
          console.log('state', state);
        }}
      >
        +1
      </button>
    </div>
  );
}
