import React from 'react'

import { CenterContainer, FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'

import { Container, Content } from './styles'

import content from './content'

const SectionKnowTeacher: React.FC = () => {
  return (
    <Container>
      <CenterContainer paddingVertical="larger">
        <FlexContainer>
          <FlexContainer column={4}>col 1</FlexContainer>
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
