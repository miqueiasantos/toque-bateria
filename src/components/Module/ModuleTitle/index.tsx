import React from 'react'

import * as Grid from '~/components/Grid'
import Badge from '~/components/Badge'

import { Number, Title } from './styles'

interface ModuleTitleProps {
  title: string
  number: number
}

const ModuleTitle: React.FC<ModuleTitleProps> = ({ title, number }) => (
  <Grid.Flex paddingBottom="large" alignItems="center">
    <Badge backgroundColor="white" textColor="textAccent" shadow>
      <Number>{number}</Number>
    </Badge>
    <Title>Módulo {title}</Title>
  </Grid.Flex>
)

export default ModuleTitle
