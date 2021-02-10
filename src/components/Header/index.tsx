import React from 'react'
import { Link } from 'gatsby'

import Navbar from '~/components/Navbar'
import Button from '~/components/Button'
import { CenterContainer } from '~/components/Grid'
import Logo from '~/components/Logo'

import { Container, LogoContainer } from './styles'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <CenterContainer>
      <Container justifyContent="space-between" alignItems="center">
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>

        <Navbar />
        <Button>Matricule-se</Button>
      </Container>
    </CenterContainer>
  )
}

export default Header
