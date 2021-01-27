import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface LogoProps {
  src: string
}

const Logo: React.FC<LogoProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Logo not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo
