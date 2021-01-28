import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Button from '~/components/Button'

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
  const {
    markdownRemark: { frontmatter: data },
  } = useStaticQuery(
    graphql`
      query HeroBannerQuery {
        markdownRemark(fileAbsolutePath: { regex: "/hero-banner/" }) {
          frontmatter {
            title
            shortDescription
            fullDescription
            buttonText
          }
        }
      }
    `
  )

  const splitTitle = data.title.split(' ')
  const firstTitleWord = splitTitle.shift()
  const secondTitleWord = splitTitle.join(' ')

  return (
    <Container>
      <CenterContainer>
        <TextContainer>
          <Title>
            {firstTitleWord}{' '}
            <TitleHightlight>{secondTitleWord}</TitleHightlight>
          </Title>
          <ShortDescription>{data.shortDescription}</ShortDescription>
          <FullDescription>{data.fullDescription}</FullDescription>

          <Button color="secondary">{data.buttonText}</Button>
        </TextContainer>
      </CenterContainer>
    </Container>
  )
}

export default HeroBanner
