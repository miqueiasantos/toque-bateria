import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import HeroBanner from '~/components/HeroBanner'
import HeroVideo from '~/components/HeroVideo'
import Card from '~/components/Card'
import { CenterContainer, Row } from '~/styles/Grid'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />
    <HeroVideo />

    <CenterContainer paddingVertical>
      <Row>
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>
    </CenterContainer>
  </Layout>
)

export default Home
