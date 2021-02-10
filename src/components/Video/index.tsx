import React from 'react'

import { Container, VideoFrame } from './styles'

interface VideoProps {
  videoSrcURL: string
  videoTitle: string
}

const Video: React.FC<VideoProps> = ({ videoSrcURL, videoTitle }) => {
  const videoParams = '?modestbranding=1&showinfo=0&rel=0&controls=0&loop=1'

  return (
    <Container>
      <VideoFrame
        src={`${videoSrcURL}${videoParams}`}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  )
}

export default Video
