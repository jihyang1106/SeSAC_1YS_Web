import React from "react";

export default function FancyBorder(props) {
  console.log(props.children[0].props.children); // Hello, props.children
  return (
    <div style={{ border: `3px solid ${props.color}` }}>{props.children}</div>
  );
}
