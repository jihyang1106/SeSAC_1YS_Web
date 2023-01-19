import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SkyblueButton from '../components/SkyblueButton';
import { useDispatch } from 'react-redux';
import { check, next } from '../store/modules/mbti';
import Progress from '../components/Progress';

const Mbti = () => {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  const SurveyQuestion = styled.p`
    font-size: 1.5em;
    color: #777;
  `;

  const Vs = styled.p`
    font-size: 2em;
    padding-top: 1em;
  `;
  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, idx) => (
          <li key={idx}>
            <SkyblueButton
              text={el.text}
              clickEvent={() => {
                dispatch(check(el.result));
                dispatch(next());
              }}
            />
            {idx === 0 && <Vs>VS</Vs>}
          </li>
        ))}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
};

export default Mbti;
