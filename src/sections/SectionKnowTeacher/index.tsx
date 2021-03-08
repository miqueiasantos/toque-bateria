import React from 'react'

import * as Grid from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Icon from '~/components/Icon'

import { Container, Content, Avatar, CallToAction } from './styles'

import content from './content'

const SectionKnowTeacher: React.FC = () => {
  return (
    <Container>
      <Grid.FlexContainer paddingVertical="larger" fluid="lg">
        <Grid.FlexRow alignItems="center">
          <Grid.FlexColumn md={4} flexDirection="column" alignItems="center" marginBottom="normal">
            <Avatar src={content.avatar} />
            <CallToAction to="/">
              <Icon {...content.callToActionWithIcon.icon} />
              {content.callToActionWithIcon.text}
            </CallToAction>
          </Grid.FlexColumn>

          <Grid.FlexColumn md={8} flexDirection="column">
            <SectionTitle theme="dark" noMargins>
              {content.title}
            </SectionTitle>
            <Content
              dangerouslySetInnerHTML={{ __html: content.fullContent }}
            />
          </Grid.FlexColumn>
        </Grid.FlexRow>
      </Grid.FlexContainer>
    </Container>
  )
}

export default SectionKnowTeacher
