import React, { useState } from "react";
import PracticeOne from "./PracticeOne";
import PracticeTwo from "./PracticeTwo";

export default function ExConditional() {
  const [condition, setCondition] = useState("1");

  const onChange = () => {
    condition === "1" ? setCondition("2") : setCondition("1");
  };
  return (
    <>
      {condition === "1" ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>{condition}번</button>
    </>
  );
}
