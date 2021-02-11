import React from 'react'

import { Colors } from '~/types'

import { Container } from './styles'

export interface BadgeProps {
  button?: boolean
  disabled?: boolean
  backgroundColor?: Colors
  textColor?: Colors
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Badge: React.FC<BadgeProps> = ({
  children,
  button,
  disabled,
  backgroundColor = 'primaryAccent',
  textColor = 'textAccent',
  onClick,
}) => {
  return (
    <Container
      as={button ? 'a' : 'div'}
      button={button}
      disabled={disabled}
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Badge
