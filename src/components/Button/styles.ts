import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from 'styled-components'

import { COLORS, RADIUS, SIZES } from '~/styles/variables'

import { ButtonProps } from '.'

export const Container = styled(AnchorLink)<ButtonProps>`
  height: 48px;
  padding: 0 ${SIZES.normal};
  border-radius: ${RADIUS.small};
  color: ${props =>
    props.color === 'primary' ? COLORS.white : COLORS.textAccent};
  background-color: ${props =>
    props.color === 'primary' ? COLORS.secondaryAccent : COLORS.secondary};
  align-items: center;
  display: inline-flex;
  font-weight: 700;

  &:hover {
    opacity: 0.7;
  }
`
