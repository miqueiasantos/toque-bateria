import React from 'react'
import Modal from 'react-modal'

import { VideoBase } from '~/types'
import Video from '../Video'

import { Container } from './styles'

export interface ModalVideoProps extends VideoBase {
  isOpen?: boolean
  handleOpen?: Function
  handleClose?: Function
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  isOpen,
  handleClose,
  videoSrcURL,
  videoTitle,
}) => {
  return (
    <Container isOpen={isOpen}>
      <Video videoSrcURL={videoSrcURL} videoTitle={videoTitle} />
    </Container>
  )
}

export default ModalVideo
