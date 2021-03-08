import styled from 'styled-components'

import { CardImageProps } from '.'

export const Container = styled.div<CardImageProps>`
  position: absolute;
  top: 0;
  padding-top: 56.25%;
  width: 100%;
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url(${props.image})`};
`
