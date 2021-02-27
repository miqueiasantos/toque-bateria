import React from 'react'

import { CenterContainer, FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import CardPlan from '~/components/CardPlan'

import {
  WarrantyContainer,
  WarrantyBadge,
  WarrantyDays,
  WarrantyShortDescription,
  WarrantyFullDescription,
} from './styles'

import content from './content'

const SectionPlans: React.FC = () => {
  return (
    <CenterContainer paddingVertical="larger">
      <SectionTitle center>{content.title}</SectionTitle>

      <FlexContainer gap="20px" paddingBottom="larger">
        {content.plans.map(plan => (
          <FlexContainer key={plan.type} column={12} flexDirection="column">
            <CardPlan {...plan} />
          </FlexContainer>
        ))}
      </FlexContainer>

      <FlexContainer justifyContent="center">
        <WarrantyContainer gap="20px" alignItems="center">
          <FlexContainer>
            <WarrantyBadge
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <WarrantyDays>{content.warranty.days}</WarrantyDays>
              <span>DIAS</span>
            </WarrantyBadge>
          </FlexContainer>

          <FlexContainer flexDirection="column">
            <WarrantyShortDescription>
              {content.warranty.shortDescription}
            </WarrantyShortDescription>
            <WarrantyFullDescription>
              {content.warranty.fullDescription}
            </WarrantyFullDescription>
          </FlexContainer>
        </WarrantyContainer>
      </FlexContainer>
    </CenterContainer>
  )
}

export default SectionPlans
