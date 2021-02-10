import React from 'react'
import Highlight from 'react-highlighter'

import { FlexContainer } from '~/components/Grid'

import Video from '~/components/Video'
import SectionTitle from '~/components/SectionTitle'
import Card from '~/components/Card'
import Icon from '~/components/Icon'

import { COLORS } from '~/styles/variables'
import { ShortContent, FullContent, CardContent } from './styles'

import content from './content'

const SectionTwo: React.FC = () => {
  return (
    <FlexContainer gap="20px" paddingTop="large" paddingBottom="larger">
      <FlexContainer flexGrow={1} column={2}>
        <Video {...content.video} />
      </FlexContainer>
      <FlexContainer
        flexDirection="column"
        flexGrow={1}
        column={2}
        flexWrap="nowrap"
      >
        <SectionTitle noMargins>{content.title}</SectionTitle>
        <ShortContent>{content.shortContent}</ShortContent>
        <FullContent>
          <Highlight search={content.fullContentHighlight}>
            {content.fullContent}
          </Highlight>
        </FullContent>

        <FlexContainer gap="20px">
          {content.cards.map((item, index) => (
            <FlexContainer column={2} key={String(index)}>
              <Card fullColor={COLORS.primary} fullSize>
                <Icon {...item.icon} />
                <CardContent>{item.content}</CardContent>
              </Card>
            </FlexContainer>
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}

export default SectionTwo
