import React from "react";
import img from "../book.png";

const MyBook = () => {
  const props = {
    title: "나의 하루는 4시 30분에 시작된다.",
    author: "김유진",
    price: "13,500원",
    type: "자기계발서",
  };
  return (
    <div className="myBook">
      <img src={img} style={{ width: "150px" }} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>저자: {props.author}</h3>
      <h3>판매가: {props.price}</h3>
      <h3>구분: {props.type}</h3>
    </div>
  );
};

export default MyBook;
