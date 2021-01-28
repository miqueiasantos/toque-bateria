import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Container } from './styles'
import Video from '../Video'
import { CenterContainer } from '~/styles/Grid'

const HeroVideo: React.FC = () => {
  const {
    markdownRemark: { frontmatter: data },
  } = useStaticQuery(
    graphql`
      query HeroVideoQuery {
        markdownRemark(fileAbsolutePath: { regex: "/hero-video/" }) {
          frontmatter {
            videoSrcURL
            videoTitle
          }
        }
      }
    `
  )

  const videoParams = '?modestbranding=1&showinfo=0&rel=0&controls=0&loop=1'

  return (
    <Container>
      <CenterContainer>
        <Video
          videoSrcURL={`${data.videoSrcURL}${videoParams}`}
          videoTitle={data.videoTitle}
        />
      </CenterContainer>
    </Container>
  )
}

export default HeroVideo
