import { useState } from "react";
import "./App.css";
// import TestRef from "./components/TestRef";
// import ChangeFocus from "./components/ChangeFocus";
// import RefDOM from "./components/RefDOM";
// import ColorInput from "./components/ColorInput";
// import Calculator from "./components/Calculator";
// import ReactFragment from "./components/ReactFragment";
// import ConditionalRender from "./components/ConditionalRender";
// import ExConditional from "./practice/ExConditional";
// import TestUseEffect from "./useEffect/TestUseEffect";
// import Timer from "./useEffect/Timer";
import ExUnmount from "./practice/ExUnmount";

function App() {
  // const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button> */}
      <ExUnmount />
    </div>
  );
}

export default App;
