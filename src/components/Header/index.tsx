import React from 'react'
import { Link } from 'gatsby'

import Navbar from '~/components/Navbar'
import Button from '~/components/Button'

import { CenterContainer, FlexContainer } from '~/components/Grid'

import { Container } from './styles'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <CenterContainer>
      <Container justifyContent="space-between" alignItems="center">
        <Link to="/">{siteTitle}</Link>

        <Navbar />
        <Button>Matricule-se</Button>
      </Container>
    </CenterContainer>
  )
}

export default Header
