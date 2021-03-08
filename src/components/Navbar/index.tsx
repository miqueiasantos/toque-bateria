import React from 'react'

import { Container, MenuList, MenuItem, MenuButton } from './styles'

import content from './content'

export interface NavbarProps {
  theme?: 'light' | 'dark'
}

const Navbar: React.FC<NavbarProps> = ({ theme = 'light' }) => {
  return (
    <MenuList className="row" as="ul" justifyContent="center">
      {content.map(item => (
        <MenuItem key={item.link} className="col-auto">
          <MenuButton
            theme={theme}
            to={`/${item.link}`}
            activeClassName="active"
          >
            {item.text}
          </MenuButton>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default Navbar
