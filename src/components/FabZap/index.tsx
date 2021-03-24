import React from 'react'
import Icon from '../Icon'

import { Container } from './styles'

const FabZap: React.FC = () => {
  return (
    <Container
      href="https://api.whatsapp.com/send?phone=5511984829838&text=Ol%C3%A1!"
      target="blank"
    >
      <Icon size="38px" name="LogoWhatsapp" pack="ionicons-solid" />
    </Container>
  )
}

export default FabZap
