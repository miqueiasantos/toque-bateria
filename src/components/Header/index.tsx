import React from 'react'
import { Link } from 'gatsby'

import Navbar from '~/components/Navbar'
import Button from '~/components/Button'
import * as Grid from '~/components/Grid'
import Logo from '~/components/Logo'

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <Grid.FlexContainer fluid="lg" paddingVertical="normal">
      <Grid.FlexRow justifyContent="space-between" alignItems="center">
        <Grid.FlexColumn md="auto" sm={12} justifyContent="center">
          <Link to="/">
            <Logo />
          </Link>
        </Grid.FlexColumn>

        <Grid.FlexColumn md="auto" sm={12} justifyContent="center">
          <Navbar />
        </Grid.FlexColumn>

        <Grid.FlexColumn md="auto" sm={12} justifyContent="center">
          <Button>Matricule-se</Button>
        </Grid.FlexColumn>
      </Grid.FlexRow>
    </Grid.FlexContainer>
  )
}

export default Header
