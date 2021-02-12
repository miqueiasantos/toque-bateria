import styled from 'styled-components'

import { CardImageProps } from '.'

export const Container = styled.div<CardImageProps>`
  position: absolute;
  top: 0;
  height: 150px;
  width: 100%;
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url(${props.image})`};
`
