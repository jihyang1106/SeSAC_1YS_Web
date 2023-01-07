import React from "react";
import MapItem from "./MapItem";

const Map = () => {
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    },
  ];

  return (
    <div>
      {items.map((e, idx) => (
        <div key={idx}>
          <h2>품목명 : {e.item}</h2>
          <p>{e.price}</p>
        </div>
      ))}
      {items.map((e, idx) => {
        return <MapItem item={e.item} price={e.price} key={idx} />;
      })}
    </div>
  );
};

export default Map;
