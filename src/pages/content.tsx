import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import * as Grid from '~/components/Grid'

import ContentBanner from '~/sections/ContentBanner'
import ContentModules from '~/sections/ContentModules'

const Content: React.FC = () => {
  return (
    <Layout>
      <SEO title="Conteúdo" />

      <ContentBanner />

      <Grid.FlexContainer marginVertical="larger">
        <ContentModules />
      </Grid.FlexContainer>
    </Layout>
  )
}

export default Content
