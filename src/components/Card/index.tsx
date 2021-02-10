import React from 'react'

import { Container } from './styles'

export interface CardProps {
  withImage?: boolean
  shadow?: boolean
  fullSize?: boolean
  fullColor?: string
}

const Card: React.FC<CardProps> = ({
  children,
  withImage,
  shadow,
  fullSize,
  fullColor,
}) => {
  return (
    <Container
      withImage={withImage}
      shadow={shadow}
      fullSize={fullSize}
      fullColor={fullColor}
    >
      {children}
    </Container>
  )
}

export default Card
