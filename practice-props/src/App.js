import "./App.css";
// import MyFood from "./components/MyFood";
// import MyBook from "./components/MyBook";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      {/* <MyFood></MyFood>
      <MyBook /> */}
      <Text text="App 컴포넌트에서 넘겨준 text props 입니다." />
    </div>
  );
}

export default App;
