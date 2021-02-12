import React from 'react'

import { Container } from './styles'

export interface CardImageProps {
  image: string
}

const CardImage: React.FC<CardImageProps> = ({ image }) => {
  return <Container image={image} />
}

export default CardImage
