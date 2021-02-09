import React from 'react'

import Video from '~/components/Video'
import { CenterContainer, FlexContainer } from '~/components/Grid'

import content from './content'

const HeroVideo: React.FC = () => {
  const videoParams = '?modestbranding=1&showinfo=0&rel=0&controls=0&loop=1'

  return (
    <FlexContainer paddingVertical="larger">
      <CenterContainer>
        <Video
          videoSrcURL={`${content.videoSrcURL}${videoParams}`}
          videoTitle={content.videoTitle}
        />
      </CenterContainer>
    </FlexContainer>
  )
}

export default HeroVideo
