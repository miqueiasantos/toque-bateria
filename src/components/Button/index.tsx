import React from 'react'

import { Container } from './styles'

export interface ButtonProps {
  to?: string
  color?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  to = '/#plans',
  color = 'primary',
}) => {
  return (
    <Container to={to} color={color}>
      {children}
    </Container>
  )
}

export default Button
