import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function BoardDetail() {
  //   const params = useParams();
  //   console.log(params);
  const { boardID } = useParams();
  console.log(boardID);
  return (
    <div>
      <Header />
      {/* <h2>{params.boardID}번 글입니다.</h2> */}
      <h2>{boardID}번 글입니다.</h2>
    </div>
  );
}
