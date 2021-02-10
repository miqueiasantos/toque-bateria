import React from 'react'
import { SIZES } from '~/styles/variables'

import { Container, MenuList, MenuItem, MenuButton } from './styles'

import content from './content'

const Navbar: React.FC = () => {
  return (
    <Container as="nav" flexGrow={1} justifyContent="flex-end">
      <MenuList as="ul" gap={SIZES.large}>
        {content.map(item => (
          <MenuItem key={item.link}>
            <MenuButton to={`/${item.link}`}>{item.text}</MenuButton>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  )
}

export default Navbar
