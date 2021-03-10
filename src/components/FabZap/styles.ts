import styled from 'styled-components'

export const Container = styled.a`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: white;
  background-color: #13d20f;
  cursor: pointer;
  z-index: 9;
  @media screen and (min-width: 768px) {
    bottom: 48px;
    right: 48px;
  }
`
