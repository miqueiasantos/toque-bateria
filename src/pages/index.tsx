import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import * as Grid from '~/components/Grid'

import HeroBanner from '~/sections/HeroBanner'
import SectionOne from '~/sections/SectionOne'
import SectionTwo from '~/sections/SectionTwo'
import SectionThree from '~/sections/SectionThree'
import SectionNumbers from '~/sections/SectionNumbers'
import SectionVideoSlider from '~/sections/SectionVideoSlider'
import SectionModules from '~/sections/SectionModules'
import SectionBonus from '~/sections/SectionBonus'
import SectionKnowTeacher from '~/sections/SectionKnowTeacher'
import SectionPlans from '~/sections/SectionPlans'

const Home = () => (
  <Layout>
    <SEO title="Início" />

    <HeroBanner />

    <Grid.FlexContainer>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Grid.FlexContainer>

    <SectionNumbers />

    <Grid.FlexContainer marginVertical="larger" fluid="lg">
      <SectionVideoSlider />
    </Grid.FlexContainer>

    <SectionModules />

    <Grid.FlexContainer paddingVertical="larger">
      <SectionBonus />
    </Grid.FlexContainer>

    <SectionKnowTeacher />
    <SectionPlans />
  </Layout>
)

export default Home
