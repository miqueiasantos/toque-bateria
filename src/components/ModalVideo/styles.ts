import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.7);

  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 982px;
`

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  z-index: 9;
`
