import React from "react";
import { useEffect, useRef, useState } from "react";
export default function PracticeTimer() {
  const [render, setRender] = useState(false);
  const time = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      time.current++;
      console.log(time.current);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료");
    };
  }, []);

  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setRender(!render)}>시간</button>
    </div>
  );
}
