import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Video from '../Video'
import { CenterContainer, FlexContainer } from '~/components/Grid'

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
    <FlexContainer paddingVertical="larger">
      <CenterContainer>
        <Video
          videoSrcURL={`${data.videoSrcURL}${videoParams}`}
          videoTitle={data.videoTitle}
        />
      </CenterContainer>
    </FlexContainer>
  )
}

export default HeroVideo
