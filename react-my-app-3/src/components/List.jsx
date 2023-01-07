import React from "react";
import Modal from "./Modal";
import ListChild from "./ListChild";

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      detail: "state 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      detail: "Lv 0 정복 하기",
    },
  ];

  return (
    <div>
      <h1>오늘 해야 할 일</h1>
      <Modal />
      {dataArr.map((e, idx) => (
        <ListChild h2={e.title} p={e.detail} key={idx} />
      ))}
      <Modal />
    </div>
  );
}
