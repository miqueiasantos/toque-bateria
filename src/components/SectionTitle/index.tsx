import React from 'react'

import { SectionTitleBaseProps } from '~/types'

import { Container, Title, Subtitle } from './styles'

const SectionTitle: React.FC<SectionTitleBaseProps> = ({
  children,
  center,
  theme = 'light',
  noMargins,
  subtitle,
}) => {
  const TitleTypeComponent = subtitle ? Subtitle : Title

  return (
    <Container
      theme={theme}
      center={center}
      noMargins={noMargins}
      subtitle={subtitle}
    >
      <TitleTypeComponent>{children}</TitleTypeComponent>
    </Container>
  )
}

export default SectionTitle
