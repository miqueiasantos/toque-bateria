import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import { CenterContainer } from '~/components/Grid'

import HeroBanner from '~/sections/HeroBanner'
import HeroVideo from '~/sections/HeroVideo'
import SectionOne from '~/sections/SectionOne'
import SectionTwo from '~/sections/SectionTwo'
import SectionThree from '~/sections/SectionThree'
import SectionNumbers from '~/sections/SectionNumbers'
import SectionVideoSlider from '~/sections/SectionVideoSlider'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />
    <HeroVideo />

    <CenterContainer>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </CenterContainer>

    <SectionNumbers />

    <CenterContainer marginVertical="larger">
      <SectionVideoSlider />
    </CenterContainer>
  </Layout>
)

export default Home
