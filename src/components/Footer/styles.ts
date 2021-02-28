import { Link } from 'gatsby'
import styled from 'styled-components'

import { FlexContainer } from '~/components/Grid'
import { COLORS, SIZES } from '~/styles/variables'

export const Container = styled.footer`
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
`

export const Copyright = styled.p`
  padding: 50px 0 0;
  border-top: 1px solid #e2e8f0;
  font-size: 0.875em;
  font-weight: 300;
  text-align: center;
`

export const SocialButton = styled(Link)`
  color: ${COLORS.white};
  &:hover {
    color: ${COLORS.primaryAccent};
  }
`
