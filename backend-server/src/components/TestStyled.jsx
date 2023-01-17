import React from "react";
import styled from "styled-components";

const TestStyled = () => {
  const MyDiv = styled.div`
    background-color: pink;
  `;
  const MyHeading = styled.h1`
    color: green;
  `;
  const MySpan = styled.span`
    background-color: beige;
    font-weight: 700;
  `;
  return (
    <MyDiv>
      <MyHeading>h1 태그입니다</MyHeading>
      <MySpan>span 태그입니다</MySpan>
    </MyDiv>
  );
};

export default TestStyled;
