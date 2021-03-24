import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import * as Grid from '~/components/Grid'
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
                    alignItems="center"
                  >
                    <Grid.FlexColumn xs="auto">
                      <Badge backgroundColor="white" textColor="textAccent">
                        <ModuleNumber>{module.number}</ModuleNumber>
                      </Badge>
                    </Grid.FlexColumn>
                    <Grid.FlexColumn>
                      <ModuleTitle>Módulo {module.title}</ModuleTitle>
                    </Grid.FlexColumn>
                  </Grid.FlexRow>
                ))}
              </Grid.FlexColumn>
            ))}
          </Grid.FlexRow>

          <Grid.Flex justifyContent="center">
            <Button to="/content" color="secondary">
              {content.callToAction}
            </Button>
          </Grid.Flex>
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
