import React from 'react'

import { Container, Title, Description } from './styles'

export interface SectionTitleProps {
  description?: string
  center?: boolean
  theme?: 'light' | 'dark'
  noMargins?: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  description,
  center,
  theme = 'light',
  noMargins,
}) => {
  return (
    <Container theme={theme} center={center} noMargins={noMargins}>
      <Title>{children}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  )
}

export default SectionTitle
