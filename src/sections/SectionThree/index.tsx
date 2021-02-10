import React from 'react'
import Highlight from 'react-highlighter'

import { FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Button from '~/components/Button'

import { FullContent } from './styles'

import content from './content'

const SectionThree: React.FC = () => {
  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      paddingBottom="larger"
    >
      <SectionTitle center>
        <Highlight search={content.titleHighlight}>{content.title}</Highlight>
      </SectionTitle>

      <FullContent>{content.fullContent}</FullContent>

      <Button>{content.callToAction}</Button>
    </FlexContainer>
  )
}

export default SectionThree
