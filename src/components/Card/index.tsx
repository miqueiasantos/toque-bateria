import React from 'react'

import { Container } from './styles'

export interface CardProps {
  withImage?: boolean
}

const Card: React.FC<CardProps> = ({ children, withImage }) => {
  return <Container withImage={withImage}>{children}</Container>
}

export default Card
