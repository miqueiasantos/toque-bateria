import React from 'react'

import { Colors } from '~/types'

import { Container } from './styles'

export interface BadgeProps {
  button?: boolean
  disabled?: boolean
  backgroundColor?: Colors
  textColor?: Colors
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  shadow?: boolean
}

const Badge: React.FC<BadgeProps> = ({
  children,
  button,
  disabled,
  backgroundColor = 'primaryAccent',
  textColor = 'textAccent',
  onClick,
  shadow,
}) => {
  return (
    <Container
      as={button ? 'a' : 'div'}
      button={button}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
      shadow={shadow}
    >
      {children}
    </Container>
  )
}

export default Badge
