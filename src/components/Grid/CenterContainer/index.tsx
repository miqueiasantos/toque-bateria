import styled from 'styled-components'

import { Margins } from '~/types'
import { CONTAINER_WIDTH, SIZES } from '~/styles/variables'

interface CenterContainerProps {
  marginTop?: Margins
  marginBottom?: Margins
  marginVertical?: Margins
  paddingVertical?: Margins
}

const CenterContainer = styled.div<CenterContainerProps>`
  position: relative;
  width: 100%;
  max-width: ${CONTAINER_WIDTH};
  margin-left: auto;
  margin-right: auto;

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
    props.paddingVertical &&
    `padding-top: ${SIZES[props.paddingVertical]};padding-bottom: ${
      SIZES[props.paddingVertical]
    };
    `};
`

export default CenterContainer
