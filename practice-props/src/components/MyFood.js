import React from "react";

const MyFood = (props) => {
  const red = { color: "red" };
  return (
    <div>
      좋아하는 음식: <span style={red}>{props.food}</span>
    </div>
  );
};

MyFood.defaultProps = {
  food: "해산물",
};

export default MyFood;
