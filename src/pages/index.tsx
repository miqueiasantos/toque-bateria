import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import HeroBanner from '~/components/HeroBanner'
import HeroVideo from '~/components/HeroVideo'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />

    <HeroVideo />
  </Layout>
)

export default Home
