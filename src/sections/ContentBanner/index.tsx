import React from 'react'

import * as Grid from '~/components/Grid'
import Icon from '~/components/Icon'

import {
  Container,
  Title,
  Subtitle,
  GotoArrowContainer,
  GotoArrow,
} from './styles'

import content from './content'

const ContentBanner: React.FC = () => {
  return (
    <Container
      paddingVertical="larger"
      paddingHorizontal="small"
      flexDirection="column"
      alignItems="center"
    >
      <Title>{content.title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: content.subtitle }} />
      <GotoArrowContainer justifyContent="center">
        <GotoArrow to="#content">
          <Icon name="South" />
        </GotoArrow>
      </GotoArrowContainer>
    </Container>
  )
}

export default ContentBanner
