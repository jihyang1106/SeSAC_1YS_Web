import styled from 'styled-components';

const Progress = ({ page, maxPage }) => {
  const MyProgress = styled.div`
    margin-top: 3em;
  `;
  const Fill = styled.div`
    width: 100%;
    height: 10px;
    background-color: #777;
    margin-top: 1em;
    text-align: left;
  `;
  const Gauge = styled.div`
    background-color: skyblue;
    display: inline-block;
    height: inherit;
    position: relative;
    top: -4px;
    width: ${(props) => props.percent}%;
  `;
  return (
    <MyProgress>
      <div>
        {page} / {maxPage}
      </div>
      <Fill>
        <Gauge percent={(page / maxPage) * 100}></Gauge>
      </Fill>
    </MyProgress>
  );
};

export default Progress;
