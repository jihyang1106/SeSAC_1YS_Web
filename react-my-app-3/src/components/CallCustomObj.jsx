import React from "react";
import CustomObj from "./CustomObj";

export default function CallCustomObj() {
  const pororoObj = {
    name: "뽀로로",
    age: "5",
    nickName: "pororo",
  };
  return (
    <div>
      <CustomObj obj={pororoObj} />
      <CustomObj />
    </div>
  );
}
