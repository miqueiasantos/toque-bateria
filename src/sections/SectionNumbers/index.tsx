import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import * as Grid from '~/components/Grid'

import {
  Container,
  SectionContainer,
  BackgroundContainer,
  BackgroundFilter,
  BackgroundImage,
  CounterContainer,
  Counter,
  CounterNumber,
  CounterDescription,
  SectionTitleFull
} from './styles'

import backgroundImage from '~/images/numbers-background/numbers-background.png'

import content from './content'
import SectionTitle from '~/components/SectionTitle'

const SectionNumbers: React.FC = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionTitleFull>{content.title}</SectionTitleFull>
        <CounterContainer alignItems="center">
          {content.cards.map(counter => (
            <Counter
              key={String(counter.number)}
              lg={3}
              md={6}
              flexDirection="column"
              paddingVertical="large"
            >
              <CountUp
                prefix="+ "
                suffix={counter.numberSuffix ? ` ${counter.numberSuffix}` : ''}
                end={counter.number}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor
                    onChange={isVisible => isVisible && start()}
                  >
                    <CounterNumber ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>

              <CounterDescription>{counter.description}</CounterDescription>
            </Counter>
          ))}
        </CounterContainer>
      </Container>

      <BackgroundContainer>
        <BackgroundFilter />
        <Parallax y={[-20, 20]}>
          <BackgroundImage src={backgroundImage} />
        </Parallax>
      </BackgroundContainer>
    </SectionContainer>
  )
}

export default SectionNumbers
