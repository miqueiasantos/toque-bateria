import React from 'react'
import { Link } from 'gatsby'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import HeroBanner from '~/components/HeroBanner'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />
  </Layout>
)

export default Home
