import React from 'react'

import { CenterContainer, FlexContainer } from '~/components/Grid'
import Logo from '~/components/Logo'
import Navbar from '~/components/Navbar'
import Icon from '~/components/Icon'

import { Container, Copyright, SocialButton } from './styles'

import content from './content'

const Footer: React.FC = () => {
  return (
    <Container>
      <CenterContainer paddingVertical="large">
        <FlexContainer justifyContent="space-between" alignItems="flex-end">
          <FlexContainer>
            <Logo type="footer" />
          </FlexContainer>
          <FlexContainer flexDirection="column" justifyContent="space-between">
            <Navbar theme="dark" />
            <FlexContainer
              gap="20px"
              justifyContent="flex-end"
              paddingTop="large"
              paddingBottom="normal"
            >
              {content.socialMedias.map(socialMedia => (
                <SocialButton key={socialMedia.url} href={socialMedia.url}>
                  <Icon size="40px" {...socialMedia.icon} />
                </SocialButton>
              ))}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <Copyright>{content.copyright}</Copyright>
      </CenterContainer>
    </Container>
  )
}

export default Footer
