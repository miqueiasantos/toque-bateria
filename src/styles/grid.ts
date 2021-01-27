import styled from 'styled-components'

import { CONTAINER_WIDTH, SIZES } from './variables'

export enum FlexAligments {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvently = 'space-evently',
}

export const CenterContainer = styled.div`
  position: relative;
  max-width: ${CONTAINER_WIDTH};
  margin-left: auto;
  margin-right: auto;
`

interface RowProps {
  justifyContent?: FlexAligments
  alignItems?: FlexAligments
}

export const Row = styled.div<RowProps>`
  display: flex;

  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

export const Column = styled.div`
  padding: ${SIZES.small};
`
