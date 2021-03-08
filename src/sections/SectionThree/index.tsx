import React from 'react'
import Highlight from 'react-highlighter'

import * as Grid from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Button from '~/components/Button'

import { FullContent } from './styles'

import content from './content'

const SectionThree: React.FC = () => {
  return (
    <Grid.FlexRow
      flexDirection="column"
      alignItems="center"
      paddingBottom="larger"
    >
      <SectionTitle center>
        <Highlight search={content.titleHighlight}>{content.title}</Highlight>
      </SectionTitle>

      <FullContent>{content.fullContent}</FullContent>

      <Button>{content.callToAction}</Button>
    </Grid.FlexRow>
  )
}

export default SectionThree
