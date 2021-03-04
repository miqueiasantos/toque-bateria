import React from 'react'

import Layout from '~/components/Layout'
import SEO from '~/components/SEO'

import { CenterContainer } from '~/components/Grid'

import ContentBanner from '~/sections/ContentBanner'
import ContentModules from '~/sections/ContentModules'

const Content: React.FC = () => {
  return (
    <Layout>
      <SEO title="Conteúdo" />

      <ContentBanner />

      <CenterContainer marginVertical="larger">
        <ContentModules />
      </CenterContainer>
    </Layout>
  )
}

export default Content
