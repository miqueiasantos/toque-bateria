import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import { CenterContainer, FlexContainer } from '~/components/Grid'

export const Container = styled.div`
  position: relative;
  min-height: 900px;
`

export const ModulesContainer = styled(CenterContainer)`
  z-index: 2;
`

export const ModulesContentContainer = styled(FlexContainer)`
  max-width: 754px;
`

export const ModuleNumber = styled.h2`
  margin: 0;
  font-size: 1.875em;
  font-weight: 700;
`

export const ModuleTitle = styled.h3`
  margin: 0;
  font-size: 1.125em;
  font-weight: 400;
  color: ${COLORS.white};
`

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
`

export const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #689a9a;
  background: linear-gradient(
    to right,
    #689a9a 0%,
    #689a9a 45%,
    rgba(91, 136, 136, 0.01) 100%
  );

  z-index: 2;
`

export const BackgroundImageContainer = styled(CenterContainer)`
  text-align: right;
  z-index: 1;
`

export const BackgroundImage = styled.img`
  position: relative;
  top: 0;
  z-index: 1;
`
