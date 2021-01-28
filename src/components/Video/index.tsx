import React from 'react'

import { Container, VideoFrame } from './styles'

interface VideoProps {
  videoSrcURL: string
  videoTitle: string
}

const Video: React.FC<VideoProps> = ({ videoSrcURL, videoTitle }) => {
  return (
    <Container>
      <VideoFrame
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        // webkitallowfullscreen="true"
        // mozallowfullscreen="true"
        allowFullScreen
      />
    </Container>
  )
}

export default Video
