import styled from 'styled-components'

import { FlexContainer } from '~/components/Grid'

import { COLORS, SIZES } from '~/styles/variables'

interface FeatureProps {
  active: boolean
}

export const Container = styled(FlexContainer)`
  text-align: center;
`

export const Type = styled.h3`
  margin: 0 0 ${SIZES.large};
  font-size: 1.5em;
  color: ${COLORS.textAccent};
`

export const FullPrice = styled.h2`
  margin: 0 0 ${SIZES.large};
  font-size: 3em;
  color: ${COLORS.secondaryAccent};
`
export const FullPriceLabel = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: ${COLORS.textAccent};
`

export const InstallmentsPrice = styled.p`
  margin: 0 0 ${SIZES.large};
  font-size: 1.25em;
  color: ${COLORS.textSecondary};
`

export const Description = styled.p`
  margin: 0 0 ${SIZES.large};
  max-width: 280px;
  font-size: 1.125em;
  font-weight: 300;
  text-align: center;
`

export const Feature = styled.p<FeatureProps>`
  margin: 0 0 ${SIZES.small};
  color: ${props => (props.active ? '#689A9A' : '#8A8A8A')};

  &:last-of-type {
    margin-bottom: ${SIZES.large};
  }
`
