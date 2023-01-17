// import UseEffectFetch from "./components/UseEffectFetch";
// import InlineCss from "./components/InlineCss";
// import TestCss from "./components/TestCss";
// import TestStyled from "./components/TestStyled";
// import PracticeCss from "./components/PracticeCss";
// import Image from "./components/Image";
// import FancyBorder from "./components/FancyBorder";
import Board from "./routercom/Board";
import Profile from "./routercom/Profile";
import Header from "./routercom/Header";
import BoardDetail from "./routercom/BoardDetail";
import NotFound from "./routercom/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <UseEffectFetch /> */}
      {/* <InlineCss /> */}
      {/* <TestCss /> */}
      {/* <TestStyled /> */}
      {/* <PracticeCss /> */}
      {/* <Image /> */}
      {/* <FancyBorder color="blue">
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용한 기술입니다.</p>
      </FancyBorder> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
