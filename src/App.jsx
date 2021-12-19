import styled from "styled-components"
import Scene from "./components/scenes/Scene"

function App() {
  return (
    <AppContainer>
      <Scene />
      <Circle />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  z-index: -2;
  position: absolute;
  height: 100vh;
  width: 100vw;

  background-color: #1d1d1d;
  overflow: hidden;

  cursor: pointer;

  touch-callout: none;
`

const Circle = styled.div`
  z-index: -1;
  position: absolute;
  left: 30%;
  top: 70%;
  height: 800px;
  width: 800px;

  background-color: #72445b;
  opacity: 0.9;

  border-radius: 100%;
  filter: blur(2.5rem);
`
