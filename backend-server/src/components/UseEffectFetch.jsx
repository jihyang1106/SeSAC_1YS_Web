import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProfileComponent from "./ProfileComponent";

export default function UseEffectFetch() {
  const [dataArr, setDatatArr] = useState([]); // 배열을 받기 때문에 기본값 빈 배열, 초기값 설정 중요

  const fetchData = async () => {
    // (1) fetch
    // const resFetch = await fetch("http://localhost:4000", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    // });

    // (2) axios
    const resFetch = await axios.get("http://localhost:4000", {
      headers: {
        "Content-type": "application/json",
      },
    });

    // if문을 하고 else를 하지않고 return을 하면 가독성도 좋고, 깔끔함
    if (resFetch.status !== 200) return alert("통신에러");

    // 통신에러가 되지 않았다면 바로 밑의 코드로 넘어온다.
    // data와 dataArr의 주소값은 다르기 때르다.
    // (1) fetch
    // const data = await resFetch.json();
    // (2) axios
    const data = resFetch.data;
    setDatatArr(data);
    console.log(data);
  };

  useEffect(() => {
    // 함수로 호출
    fetchData();
  }, []);
  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);

  return (
    <div>
      {
        /** 첫 번째 방법 */
        dataArr.map((el, idx) => {
          return (
            <ProfileComponent
              key={idx}
              name={el.name}
              age={el.age}
              nickname={el.nickname}
            />
          );
        })
      }
      {
        /** 두 번째 방법 */
        dataArr.map((el, idx) => (
          <ProfileComponent
            key={idx}
            name={el.name}
            age={el.age}
            nickname={el.nickname}
          />
        ))
      }
    </div>
  );
}
