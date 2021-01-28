import React from 'react'
import Badge from '../Badge'

import { Container } from './styles'

interface CardProps {
  imageHeader?: boolean
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Container>
      <Badge />
      {children}
    </Container>
  )
}

export default Card
