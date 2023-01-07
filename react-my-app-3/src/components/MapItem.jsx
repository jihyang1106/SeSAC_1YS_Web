import React from "react";

export default function Item({ idx, item, price }) {
  return (
    <div key={idx}>
      <h2>품목명 : {item}</h2>
      <p>{price}</p>
    </div>
  );
}
