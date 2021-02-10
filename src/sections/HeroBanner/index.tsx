import React from 'react'

import Button from '~/components/Button'

import content from './content'

import {
  Container,
  TextContainer,
  Title,
  TitleHightlight,
  ShortDescription,
  FullDescription,
  CenterContainer,
} from './styles'

const HeroBanner: React.FC = () => {
  const splitTitle = content.title.split(' ')
  const firstTitleWord = splitTitle.shift()
  const secondTitleWord = splitTitle.join(' ')

  return (
    <Container paddingTop="larger">
      <CenterContainer>
        <TextContainer>
          <Title>
            {firstTitleWord}{' '}
            <TitleHightlight>{secondTitleWord}</TitleHightlight>
          </Title>
          <ShortDescription>{content.shortContent}</ShortDescription>
          <FullDescription>{content.fullContent}</FullDescription>

          <Button color="secondary">{content.callToAction}</Button>
        </TextContainer>
      </CenterContainer>
    </Container>
  )
}

export default HeroBanner
