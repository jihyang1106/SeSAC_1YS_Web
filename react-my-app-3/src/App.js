import "./App.css";
import List from "./components/List";
import MainHeader from "./components/MainHeader";
import ClassProps from "./components/ClassProps";
import Map from "./components/Map";
import CallCustomList from "./components/CallCustomList";
import CallCustomObj from "./components/CallCustomObj";
import CallChangeObj from "./components/CallChangeObj";

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <MainHeader text="go naver" href="https://naver.com" userId="codingon" />
      <hr />
      <ClassProps name="코딩온" age="24" nickName="codingon" /> */}
      {/* <Map /> */}
      {/* <CallCustomList />*/}
      <CallChangeObj />
      {/* <CallCustomObj /> */}
    </div>
  );
}

export default App;
