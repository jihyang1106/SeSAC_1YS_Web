import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PinkButton from '../components/PinkButton';
import { reset } from '../store/modules/mbti';
import { useEffect } from 'react';

const Show = () => {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  // const inCount = async () => {
  //   const resInc = await fetch('http://localhost:4000/mongo/incount', {
  //     method: 'POST',
  //   });
  //   if (resInc.status === 200) console.log(await resInc.json());
  //   else throw new Error('통신이상');
  // };

  // useEffect(() => {
  //   inCount();
  // }, []);
  const Header = styled.p`
    font-size: 3em;
  `;
  const Explaination = styled.p`
    font-size: 1.5em;
    color: #777;
  `;
  const Result = styled.p`
    font-size: 3em;
    color: dodgerblue;
  `;
  const Additional = styled.p`
    font-size: 2em;
    color: orange;
  `;
  const AdditionalImg = styled.img`
    width: 500px;
    transform: translateX(-35px);
  `;
  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explaination>{explaination.text}</Explaination>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어 보세요!</Additional>
      <AdditionalImg src={explaination.img} alt="팩폭" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
};

export default Show;
