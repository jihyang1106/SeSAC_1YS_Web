import React from "react";

export default function InlineCss() {
  const divStyle = {
    backgroundColor: "beige",
  };

  const headingStyle = {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "700",
  };

  const spanStyle = {
    backgroundColor: "skyblue",
    fontWeight: "500",
  };
  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>CSS 테스트 컴포넌트</h1>
      <span style={spanStyle}>해당 컴포넌트를 기본 CSS로 꾸미기</span>
    </div>
  );
}
