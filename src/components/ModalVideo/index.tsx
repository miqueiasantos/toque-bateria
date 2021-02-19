import React from 'react'

import { VideoBase } from '~/types'

import Video from '~/components/Video'
import Icon from '~/components/Icon'
import Badge from '~/components/Badge'

import { Container, Content, CloseButtonContainer } from './styles'

export interface ModalVideoProps extends VideoBase {
  isOpen: boolean
  handleClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const ModalVideo: React.FC<ModalVideoProps> = ({
  isOpen,
  videoSrcURL,
  videoTitle,
  handleClose,
}) => {
  return (
    <Container isOpen={isOpen}>
      <Content>
        <CloseButtonContainer>
          <Badge
            onClick={handleClose}
            button
            backgroundColor="white"
            textColor="textAccent"
          >
            <Icon name="Close" />
          </Badge>
        </CloseButtonContainer>
        {isOpen && <Video videoSrcURL={videoSrcURL} videoTitle={videoTitle} />}
      </Content>
    </Container>
  )
}

export default ModalVideo
