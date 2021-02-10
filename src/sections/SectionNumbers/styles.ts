import styled from 'styled-components'

import { COLORS } from '~/styles/variables'

import { CenterContainer, FlexContainer } from '~/components/Grid'

export const Container = styled(CenterContainer)`
  position: relative;
  z-index: 2;
  height: 100%;
`

export const SectionContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  text-align: center;
  z-index: 1;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`

export const BackgroundFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(to left, #5b8888, #1d414e);
  opacity: 0.7;
`

export const BackgroundImage = styled.img`
  position: relative;
  top: -400px;
  z-index: 1;
`
export const CounterContainer = styled(FlexContainer)`
  height: 100%;
`
export const Counter = styled(FlexContainer)`
  color: ${COLORS.white};
`

const CounterText = styled.h2`
  margin: 0;
  font-size: 2.125em;
`

export const CounterNumber = styled(CounterText)``

export const CounterDescription = styled(CounterText)`
  font-weight: 300;
`
