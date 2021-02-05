import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import { CenterContainer } from '~/styles/Grid'
import HeroBanner from '~/components/HeroBanner'
import HeroVideo from '~/components/HeroVideo'
import SectionOne from '~/components/SectionOne'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />
    <HeroVideo />

    <CenterContainer>
      <SectionOne />
    </CenterContainer>
  </Layout>
)

export default Home
