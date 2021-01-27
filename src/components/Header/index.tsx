import React from 'react'
import { Link } from 'gatsby'

import Navbar from '~/components/Navbar'
import Button from '~/components/Button'

import { CenterContainer, FlexAligments } from '~/styles/Grid'

import { Container } from './styles'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <CenterContainer>
      <Container
        justifyContent={FlexAligments.SpaceBetween}
        alignItems={FlexAligments.Center}
      >
        <Link to="/">Logo</Link>

        <Navbar />
        <Button>Matricule-se</Button>
      </Container>
    </CenterContainer>
  )
}

export default Header
