import styled from 'styled-components'

export const Background = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-backdrop-filter: grayscale(80%) blur(5px);
  backdrop-filter: grayscale(80%) blur(5px);
`
