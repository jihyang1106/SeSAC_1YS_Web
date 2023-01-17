import React from "react";
import img from "../sample.jpg";

export default function Image() {
  return (
    <>
      <img src="/images/sample.jpg" alt="강아지" />
      <img src={img} alt="강아지" title="강아지" />
    </>
  );
}
