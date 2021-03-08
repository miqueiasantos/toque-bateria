import { Link } from 'gatsby'
import styled from 'styled-components'

import { COLORS } from '~/styles/variables'
import * as Grid from '~/components/Grid'

import goToBackground from '~/images/go-to-bg.svg'

export const Container = styled(Grid.Flex)`
  position: relative;
  color: white;
  text-align: center;
  background-color: ${COLORS.primary};
  background-image: repeating-linear-gradient(
      45deg,
      #689a9a 25%,
      transparent 25%,
      transparent 75%,
      #689a9a 75%,
      #689a9a
    ),
    repeating-linear-gradient(
      45deg,
      #689a9a 25%,
      ${COLORS.primary} 25%,
      ${COLORS.primary} 75%,
      #689a9a 75%,
      #689a9a
    );
  background-position: 0 0, 16px 16px;
  background-size: 32px 32px;
  opacity: 1;
`

export const Title = styled.h1`
  margin-top: 0;
  font-size: 3.25em;
`

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  font-weight: 400;
`

export const GotoArrowContainer = styled(Grid.Flex)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  z-index: 1;
`

export const GotoArrow = styled(Link)`
  height: 36px;
  width: 114px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: ${COLORS.primary};
  background-image: url(${goToBackground});
`
