import React from 'react'

import { FlexContainer } from '~/components/Grid'
import Badge from '~/components/Badge'

import { Number, Title } from './styles'

interface ModuleTitleProps {
  title: string
  number: number
}

const ModuleTitle: React.FC<ModuleTitleProps> = ({ title, number }) => {
  return (
    <FlexContainer paddingBottom="large" gap="20px" alignItems="center">
      <Badge backgroundColor="white" textColor="textAccent" shadow>
        <Number>{number}</Number>
      </Badge>
      <Title>Módulo {title}</Title>
    </FlexContainer>
  )
}

export default ModuleTitle
