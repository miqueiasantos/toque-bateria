import styled from 'styled-components'

import { COLORS, RADIUS, SIZES } from '~/styles/variables'

import { CardProps } from '.'

export const Container = styled.div<CardProps>`
  padding: ${SIZES.normal};
  background-color: ${COLORS.white};
  border-radius: ${RADIUS.normal};
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 0px 4px 8px 0px rgb(0 0 0 / 25%);
  }
`
