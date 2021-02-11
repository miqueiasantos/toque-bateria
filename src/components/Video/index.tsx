import React from 'react'

import { VideoBase } from '~/types'

import { Container, VideoFrame } from './styles'

interface VideoProps extends VideoBase {}

const Video: React.FC<VideoProps> = ({ videoSrcURL, videoTitle }) => {
  const regex = new RegExp('vimeo')
  const type = regex.test(videoSrcURL) ? 'vimeo' : 'youtube'

  const videoParams = '?modestbranding=1&showinfo=0&rel=0&controls=0&loop=1'

  return (
    <Container>
      <VideoFrame
        src={`${videoSrcURL}${type === 'vimeo' ? '' : videoParams}`}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />

      {type === 'vimeo' && (
        <script src="https://player.vimeo.com/api/player.js"></script>
      )}
    </Container>
  )
}

export default Video
