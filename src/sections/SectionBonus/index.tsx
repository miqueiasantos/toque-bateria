import React, { useRef, useState } from 'react'
import Highlight from 'react-highlighter'

import * as Grid from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Card from '~/components/Card'
import CardTitle from '~/components/Card/CardTitle'
import CardContent from '~/components/Card/CardContent'
import CardImage from '~/components/Card/CardImage'
import Button from '~/components/Button'
import ModalVideo from '~/components/ModalVideo'

import { Container, CardContainer } from './styles'

import content from './content'
import { VideoBase } from '~/types'

const SectionBonus: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef<VideoBase>({ videoSrcURL: '', videoTitle: '' })

  const handleOpenModal = (video: VideoBase) => {
    videoRef.current = video
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <Container>
      <SectionTitle center>
        <Highlight search={content.titleHighlight}>{content.title}</Highlight>
      </SectionTitle>

      <Grid.FlexRow paddingBottom="large">
        {content.cards.map(item => (
          <CardContainer
            key={item.title.trim()}
            lg={3}
            md={6}
            marginBottom="normal"
            onClick={() => handleOpenModal(item.video)}
          >
            <Card shadow withImage>
              <Grid.Flex alignItems="center" flexDirection="column">
                <CardImage image={item.video.videoSrcURL} videoThumb />
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
              </Grid.Flex>
            </Card>
          </CardContainer>
        ))}
      </Grid.FlexRow>

      <Grid.Flex justifyContent="center" paddingTop="large">
        <Button>{content.callToAction}</Button>
      </Grid.Flex>

      <ModalVideo
        isOpen={modalOpen}
        videoSrcURL={videoRef.current.videoSrcURL}
        videoTitle={videoRef.current.videoTitle}
        handleClose={handleCloseModal}
      />
    </Container>
  )
}

export default SectionBonus
