import React from 'react'

import { CenterContainer, FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Icon from '~/components/Icon'

import { Container, Content, Avatar, CallToAction } from './styles'

import content from './content'

const SectionKnowTeacher: React.FC = () => {
  return (
    <Container>
      <CenterContainer paddingVertical="larger">
        <FlexContainer gap="20px" alignItems="center">
          <FlexContainer column={4} flexDirection="column" alignItems="center">
            <Avatar src={content.avatar} />
            <CallToAction to="/">
              <Icon {...content.callToActionWithIcon.icon} />
              {content.callToActionWithIcon.text}
            </CallToAction>
          </FlexContainer>
          <FlexContainer column={8} flexDirection="column">
            <SectionTitle theme="dark" noMargins>
              {content.title}
            </SectionTitle>
            <Content
              dangerouslySetInnerHTML={{ __html: content.fullContent }}
            />
          </FlexContainer>
        </FlexContainer>
      </CenterContainer>
    </Container>
  )
}

export default SectionKnowTeacher
