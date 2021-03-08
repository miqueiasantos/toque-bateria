import React from 'react'
import Highlight from 'react-highlighter'

import * as Grid from '~/components/Grid'

import Video from '~/components/Video'
import SectionTitle from '~/components/SectionTitle'
import Card from '~/components/Card'
import Icon from '~/components/Icon'

import { COLORS } from '~/styles/variables'
import { ShortContent, FullContent, CardContent } from './styles'

import content from './content'

const SectionTwo: React.FC = () => {
  return (
    <Grid.FlexRow gap="20px" paddingTop="large" paddingBottom="larger">
      <Grid.FlexColumn flexGrow={1} lg={6} marginBottom="normal">
        <Video {...content.video} />
      </Grid.FlexColumn>
      <Grid.FlexColumn
        flexDirection="column"
        flexGrow={1}
        lg={6}
        flexWrap="nowrap"
        marginBottom="normal"
      >
        <SectionTitle noMargins>{content.title}</SectionTitle>
        <ShortContent>{content.shortContent}</ShortContent>
        <FullContent>
          <Highlight search={content.fullContentHighlight}>
            {content.fullContent}
          </Highlight>
        </FullContent>

        <Grid.FlexRow gap="20px">
          {content.cards.map((item, index) => (
            <Grid.FlexColumn md={6} key={String(index)} marginBottom="normal">
              <Card fullColor={COLORS.primary} fullSize>
                <Icon {...item.icon} />
                <CardContent>{item.content}</CardContent>
              </Card>
            </Grid.FlexColumn>
          ))}
        </Grid.FlexRow>
      </Grid.FlexColumn>
    </Grid.FlexRow>
  )
}

export default SectionTwo
