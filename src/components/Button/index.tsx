import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  url?: string
  color?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  url = '/',
  color = 'primary',
}) => {
  return (
    <Container to={url} color={color}>
      <span>{children}</span>
    </Container>
  )
}

export default Button
