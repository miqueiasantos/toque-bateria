import { Link } from 'gatsby'
import styled from 'styled-components'

import { FlexContainer } from '~/components/Grid'
import { COLORS, SIZES } from '~/styles/variables'

export const Container = styled(FlexContainer)`
  margin-right: ${SIZES.large};
`

export const MenuList = styled(FlexContainer)`
  margin: 0;
  padding: 0;
  list-style: none;
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
