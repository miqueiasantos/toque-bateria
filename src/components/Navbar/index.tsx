import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MenuList, MenuItem, MenuButton } from './styles'

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
            as={item.anchor && AnchorLink}
            {...(!item.anchor ? { activeClassName: 'active' } : {})}
          >
            {item.text}
          </MenuButton>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default Navbar
