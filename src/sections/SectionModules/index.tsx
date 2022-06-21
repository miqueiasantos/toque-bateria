import React, { useRef, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'

import * as Grid from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Badge from '~/components/Badge'
import Card from '~/components/Card'
import CardTitle from '~/components/Card/CardTitle'
import CardContent from '~/components/Card/CardContent'
import CardImage from '~/components/Card/CardImage'

import {
  CardTitle2,
  Container,
  ModulesContainer,
  CardContainer,
  ModulesContentContainer,
  ModuleNumber,
  ModuleTitle,
  BackgroundContainer,
  BackgroundFilter,
  BackgroundImageContainer,
  BackgroundImage,
  DescriptionInfo
} from './styles'

import backgroundImage from '~/images/modules-background/modules-background.png'

import content from './content'
import { VideoBase } from '~/types'
import ModalVideo from '~/components/ModalVideo'

const SectionModules: React.FC = () => {

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
      <ModulesContainer paddingVertical="larger">
        <ModulesContentContainer flexDirection="column">
          <SectionTitle theme="dark" noMargins>
            {content.title}
          </SectionTitle>
          <SectionTitle theme="dark" subtitle>
            {content.subtitle}
          </SectionTitle>

          <Grid.FlexRow>
            {content.modules.map((column, index) => (
              <Grid.FlexColumn
                key={column[index].title.trim()}
                md={6}
                flexDirection="column"
              >
                {column.map(module => (
                  <Grid.FlexRow
                    key={module.title.trim()}
                    paddingBottom="large"
                    alignItems="start"
                  >
                    <Grid.FlexColumn xs="auto">
                      <Badge backgroundColor="white" textColor="textAccent">
                        <ModuleNumber>{module.number}</ModuleNumber>
                      </Badge>
                    </Grid.FlexColumn>
                    <Grid.FlexColumn>
                      <ModuleTitle>
                        {module.title}
                        <DescriptionInfo>{module.description}</DescriptionInfo>
                      </ModuleTitle>
                    </Grid.FlexColumn>
                  </Grid.FlexRow>
                ))}
              </Grid.FlexColumn>
            ))}
          </Grid.FlexRow>

          {/* <Grid.Flex justifyContent="center">
            <Button to="/content" color="secondary">
              {content.callToAction}
            </Button>
          </Grid.Flex> */}
          <SectionTitle theme="dark">
            {content.itemtitle}
          </SectionTitle>
          <Grid.FlexRow paddingBottom="large">
            {content.cards && content.cards.map(item => (
              <CardContainer
                key={item.title.trim()}
                lg={4}
                md={6}
                marginBottom="normal"
                onClick={() => handleOpenModal(item.video)}
              > 
                <Card shadow withImage>
                  <Grid.Flex alignItems="center" flexDirection="column">
                    <CardImage image={item.video.videoSrcURL} videoThumb />
                    <CardTitle2>{item.title}</CardTitle2>
                    {item.content ? <CardContent>{item.content}</CardContent> : ''}
                  </Grid.Flex>
                </Card>
              </CardContainer>
            ))}
          </Grid.FlexRow>

        </ModulesContentContainer>
      </ModulesContainer>

      <BackgroundContainer>
        <BackgroundFilter />
        <BackgroundImageContainer>
          <Parallax x={[0, 20]}>
            <BackgroundImage src={backgroundImage} />
          </Parallax>
        </BackgroundImageContainer>
      </BackgroundContainer>

      <ModalVideo
        isOpen={modalOpen}
        videoSrcURL={videoRef.current.videoSrcURL}
        videoTitle={videoRef.current.videoTitle}
        handleClose={handleCloseModal}
      />
    </Container>
  )
}

export default SectionModules
