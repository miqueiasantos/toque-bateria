import React from 'react'

import Video from '~/components/Video'
import * as Grid from '~/components/Grid'

import content from './content'

const HeroVideo: React.FC = () => {
  return (
    <Grid.FlexContainer paddingVertical="larger">
      <Grid.FlexRow>
        <Video
          videoSrcURL={content.videoSrcURL}
          videoTitle={content.videoTitle}
        />
      </Grid.FlexRow>
    </Grid.FlexContainer>
  )
}

export default HeroVideo
