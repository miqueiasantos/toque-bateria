import React from 'react'
import { SIZES } from '~/styles/variables'

import { Container, MenuList, MenuItem, MenuButton } from './styles'

import content from './content'

export interface NavbarProps {
  theme?: 'light' | 'dark'
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'light' }) => {
  return (
    <Container as="nav" flexGrow={1} justifyContent="flex-end">
      <MenuList as="ul" gap={SIZES.large}>
        {content.map(item => (
          <MenuItem key={item.link}>
            <MenuButton theme={theme} to={`/${item.link}`}>
              {item.text}
            </MenuButton>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  )
}

export default Navbar
