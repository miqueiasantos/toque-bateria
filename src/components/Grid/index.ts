import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

import { FlexAligments, FlexDirection, FlexWrap, Margins } from '~/types'
import { SIZES } from '~/styles/variables'

interface FlexProps {
  flexDirection?: FlexDirection
  flexGrow?: number
  flexWrap?: FlexWrap
  justifyContent?: FlexAligments
  alignItems?: FlexAligments
  alignContent?: FlexAligments
  alignSelf?: FlexAligments
  paddingTop?: Margins
  paddingBottom?: Margins
  paddingHorizontal?: Margins
  paddingVertical?: Margins
  marginTop?: Margins
  marginBottom?: Margins
  marginHorizontal?: Margins
  marginVertical?: Margins
}

export const FlexContainer = styled(Container)<FlexProps>`
  position: relative;
    ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${props => props.alignItems && `align-items: ${props.alignItems};`};
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};
  ${props => props.alignContent && `align-content: ${props.alignContent};`};

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

  ${props => props.marginTop && `margin-top: ${SIZES[props.marginTop]};`};
  ${props =>
    props.marginBottom && `margin-bottom: ${SIZES[props.marginBottom]};`};
  ${props =>
    props.marginVertical &&
    `margin-top: ${SIZES[props.marginVertical]};margin-bottom: ${
      SIZES[props.marginVertical]
    };
      `};
  ${props =>
    props.marginHorizontal &&
    `margin-left: ${SIZES[props.marginHorizontal]};margin-right: ${
      SIZES[props.marginHorizontal]
    };
      `};
`

export const FlexRow = styled(Row)<FlexProps>`
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${props => props.alignItems && `align-items: ${props.alignItems};`};
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};
  ${props => props.alignContent && `align-content: ${props.alignContent};`};

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

  ${props => props.marginTop && `margin-top: ${SIZES[props.marginTop]};`};
  ${props =>
    props.marginBottom && `margin-bottom: ${SIZES[props.marginBottom]};`};
  ${props =>
    props.marginVertical &&
    `margin-top: ${SIZES[props.marginVertical]};margin-bottom: ${
      SIZES[props.marginVertical]
    };
      `};
  ${props =>
    props.marginHorizontal &&
    `margin-left: ${SIZES[props.marginHorizontal]};margin-right: ${
      SIZES[props.marginHorizontal]
    };
      `};
`

export const FlexColumn = styled(Col)<FlexProps>`
  display: inline-flex;
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${props => props.alignItems && `align-items: ${props.alignItems};`};
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};
  ${props => props.alignContent && `align-content: ${props.alignContent};`};

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

  ${props => props.marginTop && `margin-top: ${SIZES[props.marginTop]};`};
  ${props =>
    props.marginBottom && `margin-bottom: ${SIZES[props.marginBottom]};`};
  ${props =>
    props.marginVertical &&
    `margin-top: ${SIZES[props.marginVertical]};margin-bottom: ${
      SIZES[props.marginVertical]
    };
      `};
  ${props =>
    props.marginHorizontal &&
    `margin-left: ${SIZES[props.marginHorizontal]};margin-right: ${
      SIZES[props.marginHorizontal]
    };
      `};
`

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${props => props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
  ${props =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${props => props.alignItems && `align-items: ${props.alignItems};`};
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};
  ${props => props.alignContent && `align-content: ${props.alignContent};`};

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

  ${props => props.marginTop && `margin-top: ${SIZES[props.marginTop]};`};
  ${props =>
    props.marginBottom && `margin-bottom: ${SIZES[props.marginBottom]};`};
  ${props =>
    props.marginVertical &&
    `margin-top: ${SIZES[props.marginVertical]};margin-bottom: ${
      SIZES[props.marginVertical]
    };
      `};
  ${props =>
    props.marginHorizontal &&
    `margin-left: ${SIZES[props.marginHorizontal]};margin-right: ${
      SIZES[props.marginHorizontal]
    };
      `};
`
