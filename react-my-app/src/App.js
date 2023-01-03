import logo from './logo.svg';
import './App.css';
import Swal from "sweetalert2";
import MainHeader1 from './components/MainHeader';
import ButtonNaver from './components/ButtonNaver'; // 클래스형 컴포넌트 실습

function App() {
  const str = "hello, React world!";
  const test = "test";
  const fontStyle = {fontWeight:"bold"};
  const background = {backgroundColor:"skyblue", fontSize:"30px", fontWeight:"bold"};

  function hello() {
    console.log("콘솔 출력");
  }

  function sweetAlert() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      iconHtml : `<img src=${logo} style="width:100px">`,
      imageAlt: 'Custom image',
    })
  }
  const helloStr = "Hello, first exercise";

  // 함수형 컴포넌트
    function MainHeader() {
      return (
        <h1>함수형 내부 정의</h1>
      )
    }

  // 함수형 컴포넌트 실습
  function ImgComponent() {
      return (
          <img src={logo} alt="로고"/>
      )
  }
  

  return (
    // <div className="App">
    //   <div className={test}>{str}</div>
    //   <img src={logo} alt="로고"/>
    //   <div style={{fontSize:"32px"}}>인라인 스타일</div>
    //   <div style={fontStyle}>인라인 스타일 bold</div>
    //   <div style={background}>인라인 스타일 백그라운드</div>
    //   <button type="button" onClick={() => {Swal.fire("클릭했어용!")}}>클릭</button>&nbsp;
    //   <span onClick={() => {
    //     let num = 10;
    //     num += 5;
    //     console.log("num: ",num);
    //   }}>클릭2
    //   </span>&nbsp;
    //   <span onClick={hello}>클릭3</span>
    //   <div style={{marginTop:"32px", backgroundColor:"skyblue"}} 
    //         onClick={() => {sweetAlert()}}>{helloStr}</div>
    // </div>
    <div className='App'>
      {/* <MainHeader1 />
      {MainHeader()} */}
      
      {ImgComponent()}
      <ButtonNaver/>
    </div>
  );
}

export default App;
