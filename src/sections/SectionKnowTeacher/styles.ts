import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS, SIZES } from '~/styles/variables'

export const Container = styled.div`
  background-color: ${COLORS.primary};
`

export const Content = styled.p`
  color: ${COLORS.white};
  font-size: 1.25em;
`

export const Avatar = styled.img`
  border-radius: 100%;
  max-width: 272px;
`

export const CallToAction = styled(Link)`
  margin-top: ${SIZES.large};
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${COLORS.white};
`
