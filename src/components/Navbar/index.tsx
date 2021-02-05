import React from 'react'
import { SIZES } from '~/styles/variables'

import { Container, MenuList, MenuItem, MenuButton } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container as="nav" flexGrow={1} justifyContent="flex-end">
      <MenuList as="ul" gap={SIZES.large}>
        <MenuItem>
          <MenuButton to="/#home">Home</MenuButton>
        </MenuItem>

        <MenuItem>
          <MenuButton to="/content">Conteúdo</MenuButton>
        </MenuItem>

        <MenuItem>
          <MenuButton to="/#teacher">O Professor</MenuButton>
        </MenuItem>

        <MenuItem>
          <MenuButton to="/#plans">Planos</MenuButton>
        </MenuItem>

        <MenuItem>
          <MenuButton to="/#student">Área do Aluno</MenuButton>
        </MenuItem>
      </MenuList>
    </Container>
  )
}

export default Navbar
