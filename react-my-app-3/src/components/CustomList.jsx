import React from "react";

export default function CustomList(props) {
  return (
    <ul>
      {
        // ? => arr의 값이 있으면 map을 실행
        props.arr?.map((e) => (
          <li key={e}>{e}</li>
        ))
        // props.arr.map((e) => (
        //   <li key={e}>{e}</li>
        // ))
      }
    </ul>
  );
}
