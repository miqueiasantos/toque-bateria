import styled from 'styled-components'

import { FlexContainer } from '~/components/Grid'

import { SIZES, COLORS, RADIUS } from '~/styles/variables'

import badgeBackground from '~/images/badge-warranty.svg'

export const WarrantyContainer = styled(FlexContainer)`
  padding: ${SIZES.normal};
  max-width: 760px;
  font-size: 1.25em;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  border-radius: ${RADIUS.normal};
`

export const WarrantyText = styled.span`
  margin: 0;
`
export const WarrantyBadge = styled(FlexContainer)`
  width: 80px;
  height: 80px;
  background-image: url(${badgeBackground});
  font-size: 0.625em;
`
export const WarrantyDays = styled(WarrantyText)`
  font-size: 28px;
`

export const WarrantyShortDescription = styled(WarrantyText)`
  font-weight: 600;
`
export const WarrantyFullDescription = styled(WarrantyText)`
  font-weight: 300;
`
