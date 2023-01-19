import Button from './Button';

const SkyblueButton = ({ text, clickEvent }) => {
  return (
    <Button
      text={text}
      clickEvent={clickEvent}
      mainColor="#f9c4d2"
      subColor="#b18597"
      hoverColor="#ffe2ed"
    />
  );
};

export default SkyblueButton;
