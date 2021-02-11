import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

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
} from './styles'

import backgroundImage from '~/images/numbers-background/numbers-background.png'

import content from './content'

const SectionNumbers: React.FC = () => {
  return (
    <SectionContainer>
      <Container>
        <CounterContainer>
          {content.map(counter => (
            <Counter
              key={String(counter.number)}
              column={4}
              flexDirection="column"
              paddingVertical="large"
              paddingHorizontal="normal"
              justifyContent="center"
              alignItems="center"
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
