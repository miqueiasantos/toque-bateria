import styled from 'styled-components'

import {
  ColumnSizes,
  FlexAligments,
  FlexDirection,
  FlexWrap,
  Margins,
} from '~/types'
import { SIZES } from '~/styles/variables'

interface FlexContainerProps {
  flexDirection?: FlexDirection
  flexGrow?: number
  flexWrap?: FlexWrap
  justifyContent?: FlexAligments
  alignItems?: FlexAligments
  alignContent?: FlexAligments
  alignSelf?: FlexAligments
  gap?: string
  paddingTop?: Margins
  paddingBottom?: Margins
  paddingHorizontal?: Margins
  paddingVertical?: Margins
  column?: ColumnSizes
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  ${props => props.column && `width: ${100 * (props.column / 12)}%;`}

  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.alignContent && `align-content: ${props.alignContent};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};

  ${props => props.paddingTop && `padding-top: ${SIZES[props.paddingTop]};`};

  ${props =>
    props.paddingBottom && `padding-bottom: ${SIZES[props.paddingBottom]};`};

  ${props =>
    props.paddingVertical &&
    `padding-top: ${SIZES[props.paddingVertical]};padding-bottom: ${
      SIZES[props.paddingVertical]
    };
    `};

  ${props =>
    props.paddingHorizontal &&
    `padding-left: ${SIZES[props.paddingHorizontal]};padding-right: ${
      SIZES[props.paddingHorizontal]
    };
    `};
`

export default FlexContainer
