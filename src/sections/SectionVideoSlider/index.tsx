import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import SectionTitle from '~/components/SectionTitle'
import Video from '~/components/Video'
import Badge from '~/components/Badge'
import Icon from '~/components/Icon'
import { FlexContainer } from '~/components/Grid'

import { Container, VideoLabel } from './styles'

import content from './content'

const SectionVideoSlider: React.FC = () => {
  return (
    <Container>
      <SectionTitle noMargins center>
        {content.title}
      </SectionTitle>
      <SectionTitle subtitle center>
        {content.subtitle}
      </SectionTitle>

      <Carousel
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <Badge
            button
            backgroundColor="primary"
            textColor="white"
            onClick={clickHandler}
            disabled={!hasPrev}
          >
            <Icon name="ArrowBack" />
          </Badge>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <Badge
            button
            backgroundColor="primary"
            textColor="white"
            onClick={clickHandler}
            disabled={!hasNext}
          >
            <Icon name="ArrowForward" />
          </Badge>
        )}
      >
        {content.videos.map(video => (
          <FlexContainer
            key={video.videoTitle.trim()}
            flexDirection="column"
            flexGrow={1}
            paddingHorizontal="larger"
          >
            <Video {...video} />
            <VideoLabel>{video.videoTitle}</VideoLabel>
          </FlexContainer>
        ))}
      </Carousel>
    </Container>
  )
}

export default SectionVideoSlider
