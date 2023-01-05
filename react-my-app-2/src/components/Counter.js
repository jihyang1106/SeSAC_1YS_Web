import { useState } from 'react';

export default function Counter() {
  let [num, setNum] = useState(1);

  return (
    <div>
      <div>{num}</div>
      <button onClick={() => setNum(num - 1)}>-</button>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
}
