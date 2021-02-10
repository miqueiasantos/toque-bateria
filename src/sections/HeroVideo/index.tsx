import React from 'react'

import Video from '~/components/Video'
import { CenterContainer, FlexContainer } from '~/components/Grid'

import content from './content'

const HeroVideo: React.FC = () => {
  return (
    <FlexContainer paddingVertical="larger">
      <CenterContainer>
        <Video
          videoSrcURL={content.videoSrcURL}
          videoTitle={content.videoTitle}
        />
      </CenterContainer>
    </FlexContainer>
  )
}

export default HeroVideo
