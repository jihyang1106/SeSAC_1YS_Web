import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/mbti';
import { useState, useEffect } from 'react';

const Start = () => {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  // MongoDB용 코드
  const mongoFetchData = async () => {
    const resMongoCount = await fetch('http://localhost:4000/mongo/count');
    if (resMongoCount.status === 200) {
      const num = await resMongoCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
      console.log(num); // counts가 제대로 들어오는지 확인
    }

    const resMongoData = await fetch('http://localhost:4000/mongo/getdata');
    if (resMongoData.status === 200) {
      const data = await resMongoData.json();
      console.log(data); // 질문용 data가 제대로 들어오는지 확인
      // 리액트의 기본 동작으로 통신 전 빈 데이터가 전달 되는 것을 예방
      if (data[0].survey.length !== 0) dispatch(init(data[0]));
    }

    if (resMongoCount !== 200 || resMongoData !== 200) {
      throw new Error('통신 이상');
    }
  };

  // useEffect(() => {
  //   mongoFetchData();
  // }, [counts]);

  const Header = styled.p`
    font-size: 3em;
  `;
  const MainImg = styled.img`
    width: inherit;
  `;
  const SubHeader = styled.p`
    font-size: 1.5em;
    color: #777;
  `;
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.png" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아봅시다! 지금까지 {'\n\n'}{' '}
        {counts}명이 참여해주셨습니다!
      </SubHeader>
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => dispatch(next())}
      ></OrangeButton>
    </>
  );
};

export default Start;
