import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import * as Grid from '~/components/Grid'

import heroBackground from '~/images/hero-banner.png'

export const Container = styled.div`
  background-color: ${COLORS.primary};
  height: 600px;
`

export const TextContainer = styled.div``

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 3.25em;
  color: ${COLORS.textAccent};
`

export const TitleHightlight = styled.span`
  color: ${COLORS.secondary};
`

export const ShortDescription = styled.h2`
  margin: 0 0 30px;
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

export const CenterContainer = styled(Grid.FlexContainer)`
  height: 100%;
  background-image: url(${heroBackground});
  background-position: bottom right;
  background-repeat: no-repeat;
`
