import styled from 'styled-components'

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: white;
  @media screen and (min-width: 768px) {
    position: fixed;
  }
`
