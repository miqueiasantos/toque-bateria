import React from 'react'

import { Container, Title, Description } from './styles'

export interface SectionTitleProps {
  sectionTitle?: string
  description?: string
  center?: boolean
  theme?: 'light' | 'dark'
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  sectionTitle,
  description,
  center,
  theme = 'light',
}) => {
  return (
    <Container theme={theme} center={center}>
      <Title>{sectionTitle}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default SectionTitle
