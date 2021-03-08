import { Link } from 'gatsby'
import styled from 'styled-components'

import * as Grid from '~/components/Grid'
import { COLORS, SIZES } from '~/styles/variables'

import { NavbarProps } from '.'

interface MenuButtonProps extends NavbarProps {}

export const Container = styled(Grid.FlexContainer)``

export const MenuList = styled(Grid.FlexRow)`
  margin: 0;
  padding: 0;
  list-style: none;
`

export const MenuItem = styled.li``

export const MenuButton = styled(Link)<MenuButtonProps>`
  color: ${props =>
    props.theme === 'light' ? COLORS.textSecondary : COLORS.white};
  font-weight: 500;
  position: relative;

  &:after {
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 100%;
    background-color: ${props =>
      props.theme === 'light' ? COLORS.textSecondary : COLORS.white};
    transform: scale3d(0, 1, 1) rotate(1deg);
    transition: all 0.3s;
    opacity: 0;
    content: '';
  }

  &:hover,
  &.active {
    color: ${props =>
      props.theme === 'light' ? COLORS.primary : COLORS.white};

    &:after {
      opacity: 1;
      transform: scale3d(1, 1, 1) rotate(0);
      background-color: ${props =>
        props.theme === 'light' ? COLORS.primary : COLORS.white};
    }
  }
`
