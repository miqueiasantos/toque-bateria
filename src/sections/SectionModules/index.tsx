import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Badge from '~/components/Badge'
import Button from '~/components/Button'

import {
  Container,
  ModulesContainer,
  ModulesContentContainer,
  ModuleNumber,
  ModuleTitle,
  BackgroundContainer,
  BackgroundFilter,
  BackgroundImageContainer,
  BackgroundImage,
} from './styles'

import backgroundImage from '~/images/modules-background/modules-background.png'

import content from './content'

const SectionModules: React.FC = () => {
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

          <FlexContainer>
            <FlexContainer flexDirection="column" column={2}>
              {content.modules
                .map((module, index) => (
                  <FlexContainer
                    key={module.title.trim()}
                    paddingBottom="large"
                    gap="20px"
                    alignItems="center"
                  >
                    <Badge backgroundColor="white" textColor="textAccent">
                      <ModuleNumber>{index + 1}</ModuleNumber>
                    </Badge>
                    <ModuleTitle>Módulo {module.title}</ModuleTitle>
                  </FlexContainer>
                ))
                .slice(0, 5)}
            </FlexContainer>

            <FlexContainer flexDirection="column" column={2}>
              {content.modules
                .map((module, index) => (
                  <FlexContainer
                    key={module.title.trim()}
                    paddingBottom="large"
                    gap="20px"
                    alignItems="center"
                  >
                    <Badge backgroundColor="white" textColor="textAccent">
                      <ModuleNumber>{index + 1}</ModuleNumber>
                    </Badge>
                    <ModuleTitle>Módulo {module.title}</ModuleTitle>
                  </FlexContainer>
                ))
                .slice(5)}
            </FlexContainer>
          </FlexContainer>

          <FlexContainer justifyContent="center">
            <Button color="secondary">{content.callToAction}</Button>
          </FlexContainer>
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
    </Container>
  )
}

export default SectionModules
