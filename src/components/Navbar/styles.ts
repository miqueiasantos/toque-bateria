import { Link } from 'gatsby'
import styled from 'styled-components'
import { COLORS, SIZES } from '~/styles/variables'

export const Container = styled.nav``

export const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: ${SIZES.large};
`

export const MenuItem = styled.li``

export const MenuButton = styled(Link)`
  color: ${COLORS.textSecondary};
  font-weight: 500;
  position: relative;

  &:after {
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 100%;
    background-color: ${COLORS.textSecondary};
    transform: scale3d(0, 1, 1) rotate(1deg);
    transition: all 0.3s;
    opacity: 0;
    content: '';
  }

  &:hover {
    color: ${COLORS.primary};

    &:after {
      opacity: 1;
      transform: scale3d(1, 1, 1) rotate(0);
      background-color: ${COLORS.primary};
    }
  }
`
