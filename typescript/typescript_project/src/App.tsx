import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const showAlert = (): void => {
    alert("alert");
  };
  return (
    <div>
      <button onClick={showAlert}>버튼</button>
    </div>
  );
}

export default App;
