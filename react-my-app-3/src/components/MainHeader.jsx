import React from "react";

const MainHeader = (props) => {
  // 1번 (구조분해 할당)
  //   const { text, href, userId } = props;
  //   return (
  //     <div>
  //       <h2>{userId}님 반갑습니다.</h2>
  //       <a href={href}>{text}</a>
  //     </div>
  //   );
  // 2번 기본
  return (
    <div>
      <h2>{props.userId}님 반갑습니다.</h2>
      <a href={props.href}>{props.text}</a>
    </div>
  );
};

// 3번
// const MainHeader = ({ text, href, userId }) => {
//   return (
//     <div>
//       <h2>{userId}님 반갑습니다.</h2>
//       <a href={href}>{text}</a>
//     </div>
//   );
// };

export default MainHeader;
