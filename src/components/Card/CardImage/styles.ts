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
  z-index: 1;
`

export const PlayContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`
