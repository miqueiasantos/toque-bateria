import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import { CenterContainer as Center, Column } from '~/styles/Grid'

import heroBackground from '~/images/hero-banner.png'

export const Container = styled.div`
  background-color: ${COLORS.primary};
  align-items: center;
`

export const TextContainer = styled(Column)``

export const Title = styled.h1`
  margin-top: 0;
  font-size: 3.25em;
  color: ${COLORS.textAccent};
`

export const TitleHightlight = styled.span`
  margin-bottom: 50px;
  color: ${COLORS.secondary};
`

export const ShortDescription = styled.h2`
  margin-bottom: 30px;
  max-width: 560px;
  font-size: 2.125em;
  font-weight: 400;
  color: ${COLORS.white};
`
export const FullDescription = styled.p`
  max-width: 425px;
  font-size: 1.25em;
  font-weight: 300;
  color: ${COLORS.white};
`

export const CenterContainer = styled(Center)`
  height: 600px;
  background-image: url(${heroBackground});
  background-position: bottom right;
  background-repeat: no-repeat;
`
