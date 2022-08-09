import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import * as Grid from '~/components/Grid'

import heroBackground from '~/images/hero-banner.png'

export const Container = styled.div`
  background-color: ${COLORS.primary};
  padding: 100px 0;
  margin-bottom: 100px;
  @media screen and (max-width: 480px) {
    padding: 66px 0;
  }
`

export const TextContainer = styled.div``

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 3.25em;
  display:none;
  color: ${COLORS.textAccent};
`

export const TitleHightlight = styled.span`
  color: ${COLORS.secondary};
`

export const ShortDescription = styled.h2`
  margin: 0 auto 20px auto;
  max-width: 790px;
  font-size: 2.125em;
  font-weight: 700;
  text-align: center;
  color: ${COLORS.white};
  @media screen and (max-width: 480px) {
    font-size: 1.7em;
  }
`
export const ShortDescription2 = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: ${COLORS.secondary};
`
export const FullDescription = styled.p`
  text-align: center;
  font-size: 1.25em;
  font-weight: 300;
  color: ${COLORS.white};
`

export const CenterContainer = styled(Grid.FlexContainer)`
  height: 100%;
  @media screen and (min-width: 1200px) {
    // background-image: url(${heroBackground});
    background-position: bottom right;
    background-repeat: no-repeat;
  }
`
