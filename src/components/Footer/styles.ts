import styled from 'styled-components'

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

export const SocialButtonContainer = styled.div`
  margin-top: ${SIZES.large};
  /* text-align: right; */
`

export const SocialButton = styled.a`
  color: ${COLORS.white};
  margin: ${SIZES.small};
  &:hover {
    color: ${COLORS.primaryAccent};
  }
`
