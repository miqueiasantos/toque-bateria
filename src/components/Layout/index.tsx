import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

import 'normalize.css'
import GlobalStyle from '~/styles/GlobalStyle'
import { Container } from './styles'

const Layout: React.FC = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />

      <Header siteTitle={site.siteMetadata?.title} />

      <Container>{children}</Container>

      <Footer />
    </>
  )
}

export default Layout
