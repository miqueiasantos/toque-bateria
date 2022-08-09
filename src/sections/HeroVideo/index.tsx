import React from 'react'

import Video from '~/components/Video'
import * as Grid from '~/components/Grid'
import { Container } from './styles'
import Button from '~/components/Button'

import content from './content'

const HeroVideo: React.FC = () => {
  return (
        <Grid.FlexContainer>
          <Grid.FlexRow>
            <Video
              videoSrcURL={content.videoSrcURL}
              videoTitle={content.videoTitle}
            />
          </Grid.FlexRow>
          <Grid.FlexRow justifyContent="center" paddingTop="large">
            <Button color="secondary" to={content.callToAction}>{content.callToActionText}</Button>
          </Grid.FlexRow>
        </Grid.FlexContainer>
  )
}

export default HeroVideo
