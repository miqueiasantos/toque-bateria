import React from 'react'

import * as Grid from '~/components/Grid'
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
    <Grid.FlexContainer paddingVertical="larger" id="plans">
      <SectionTitle center>{content.title}</SectionTitle>

      <Grid.FlexRow paddingBottom="larger">
        {content.plans.map(plan => (
          <Grid.FlexColumn
            key={plan.type}
            lg={4}
            flexDirection="column"
            marginBottom="normal"
          >
            <CardPlan {...plan} />
          </Grid.FlexColumn>
        ))}
      </Grid.FlexRow>

      <Grid.FlexContainer fluid>
        <Grid.FlexRow justifyContent="center">
          <WarrantyContainer alignItems="center">
            <Grid.FlexColumn md={2}>
              <WarrantyBadge
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <WarrantyDays>{content.warranty.days}</WarrantyDays>
                <span>DIAS</span>
              </WarrantyBadge>
            </Grid.FlexColumn>

            <Grid.FlexColumn md={10} flexDirection="column">
              <WarrantyShortDescription>
                {content.warranty.shortDescription}
              </WarrantyShortDescription>
              <WarrantyFullDescription>
                {content.warranty.fullDescription}
              </WarrantyFullDescription>
            </Grid.FlexColumn>
          </WarrantyContainer>
        </Grid.FlexRow>
      </Grid.FlexContainer>
    </Grid.FlexContainer>
  )
}

export default SectionPlans
