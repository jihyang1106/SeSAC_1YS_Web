import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const weight = 100;

const reducer = (state = weight, action) => {
  // if (action.type === "증가") {
  //   state++;
  //   return state;
  // } else if (action.type === "감소") {
  //   state--;
  //   return state;
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case "증가":
      state++;
      return state;
    case "감소":
      state--;
      return state;
    default:
      return state;
  }
};

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
