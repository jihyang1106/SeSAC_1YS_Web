import logo from "../logo.svg";
import styled, { keyframes } from "styled-components";

function StyledApp() {
  const RootDiv = styled.div`
    text-align: center;
  `;

  const move = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: ${move} infinite 20s linear;
    }
  `;

  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const MyA = styled.a`
    color: #61dafb;
  `;
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 배우기
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default StyledApp;
