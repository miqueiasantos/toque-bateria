import React from 'react'

import { Container, MenuList, MenuItem, MenuButton } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <MenuList>
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
