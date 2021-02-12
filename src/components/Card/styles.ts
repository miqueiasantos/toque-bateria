import styled from 'styled-components'

import { COLORS, RADIUS, SIZES } from '~/styles/variables'

import { CardProps } from '.'

export const Container = styled.div<CardProps>`
  position: relative;
  padding: ${SIZES.normal};
  background-color: ${COLORS.white};
  border-radius: ${RADIUS.normal};
  overflow: hidden;
  transition: all 0.3s;

  ${props => props.withImage && 'padding-top: 56.25%;'};
  ${props => props.fullSize && 'width: 100%;'};
  ${props => props.shadow && 'box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);'};
  ${props =>
    props.fullColor &&
    `background-color: ${props.fullColor}; color: ${COLORS.white}`};

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 25%);
  }
`

export const Image = styled.img``
