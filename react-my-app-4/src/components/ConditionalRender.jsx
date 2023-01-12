import React, { useState } from "react";
import Item from "./Item";

export default function ConditionalRender() {
  const [condition, setCondition] = useState("show");

  const onChange = () => {
    condition === "show" ? setCondition("hidden") : setCondition("show");
  };

  const conditionalRender = condition === "감추기" && <Item />;
  //   const conditionalRender = condition === "hidden" ? <Item /> : " ";

  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
