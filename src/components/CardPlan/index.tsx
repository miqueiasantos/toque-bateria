import React from 'react'

import { Plan } from '~/types'

import Card from '~/components/Card'
import Icon from '~/components/Icon'
import Button from '~/components/Button'

import {
  Container,
  Type,
  FullPrice,
  FullPriceLabel,
  InstallmentsPrice,
  Description,
  Feature,
} from './styles'

interface CardPlanProps extends Plan {}

const CardPlan: React.FC<CardPlanProps> = ({
  type,
  fullPrice,
  installmentsPrice,
  description,
  features,
  callToAction,
}) => {
  return (
    <Card shadow>
      <Container flexDirection="column" alignItems="center">
        <Type>{type}</Type>
        {fullPrice && 
            <FullPrice>
              R$ {fullPrice} <FullPriceLabel>mês</FullPriceLabel>
            </FullPrice>
        }
        {/* <InstallmentsPrice>
          ou 12 parcelas de R$ {installmentsPrice.toFixed(2).replace('.', ',')}
        </InstallmentsPrice> */}
        <Description>{description}</Description>
        {features.map(feature => (
          <Feature key={feature.title.trim()} active={feature.active}>
            <Icon
              size={'24px'}
              name={
                feature.active ? 'CheckCircleOutline' : 'CloseCircleOutline'
              }
              pack={feature.active ? 'material' : 'eva-outline'}
            />{' '}
            {feature.title}
          </Feature>
        ))}

        <Button to={callToAction} color={fullPrice ? 'primary' : 'secondary'}>{fullPrice ? 'Matricule-se' : 'Fale Conosco'}</Button>
      </Container>
    </Card>
  )
}

export default CardPlan
