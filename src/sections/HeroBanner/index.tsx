import React from 'react'

import Button from '~/components/Button'

import content from './content'
import HeroVideo from '~/sections/HeroVideo'

import {
  Container,
  TextContainer,
  Title,
  TitleHightlight,
  ShortDescription,
  ShortDescription2,
  FullDescription,
  CenterContainer,
} from './styles'

const HeroBanner: React.FC = () => {
const splitTitle = content.title.split(' ')
const firstTitleWord = splitTitle.shift()
const secondTitleWord = splitTitle.join(' ')

  return (
    <Container>
      <CenterContainer fluid="lg">
        <TextContainer>
          <Title>
            {firstTitleWord}{' '}
            <TitleHightlight>{secondTitleWord}</TitleHightlight>
          </Title>
          <ShortDescription>
            {content.shortContent}
            <ShortDescription2>{content.shortContent2}</ShortDescription2>
            {content.shortContent3}
            </ShortDescription>
          <FullDescription>{content.fullContent}</FullDescription>

          <HeroVideo />

        </TextContainer>
      </CenterContainer>
    </Container>
  )
}

export default HeroBanner
