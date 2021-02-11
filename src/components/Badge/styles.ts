import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import { BadgeProps } from '.'

export const Container = styled.div<BadgeProps>`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  color: ${props => `${COLORS[props.textColor]}`};
  background-color: ${props => `${COLORS[props.backgroundColor]}`};
  ${props => props.textColor && `color: ${COLORS[props.textColor]};`}
  ${props => props.button && 'cursor: pointer;'}
  ${props => props.disabled && 'opacity: .7; cursor: default;'}
`
