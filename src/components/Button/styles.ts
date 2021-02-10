import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, RADIUS, SIZES } from '~/styles/variables'

export const Container = styled(Link)`
  height: 48px;
  padding: 0 ${SIZES.normal};
  border-radius: ${RADIUS.small};
  color: ${props =>
    props.color === 'primary' ? COLORS.white : COLORS.textAccent};
  background-color: ${props =>
    props.color === 'primary' ? COLORS.secondaryAccent : COLORS.secondary};
  align-items: center;
  display: inline-flex;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`
