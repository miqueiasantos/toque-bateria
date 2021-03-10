import React from 'react'

import * as Grid from '~/components/Grid'
import Logo from '~/components/Logo'
import Navbar from '~/components/Navbar'
import Icon from '~/components/Icon'

import {
  Container,
  Copyright,
  SocialButtonContainer,
  SocialButton,
} from './styles'

import content from './content'

const Footer: React.FC = () => {
  return (
    <Container>
      <Grid.FlexContainer paddingVertical="large" fluid="lg">
        <Grid.FlexRow justifyContent="space-between" alignItems="flex-end">
          <Grid.FlexColumn xs={12} md={4}>
            <Logo type="footer" />
          </Grid.FlexColumn>
          <Grid.FlexColumn
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            md="auto"
            xs={12}
          >
            <Navbar theme="dark" />

            <SocialButtonContainer>
              {content.socialMedias.map(socialMedia => (
                <SocialButton key={socialMedia.url} href={socialMedia.url}>
                  <Icon size="40px" {...socialMedia.icon} />
                </SocialButton>
              ))}
            </SocialButtonContainer>
          </Grid.FlexColumn>
        </Grid.FlexRow>
        <Copyright>{content.copyright}</Copyright>
      </Grid.FlexContainer>
    </Container>
  )
}

export default Footer
