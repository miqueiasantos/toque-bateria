import React from 'react'
import Icon from '../Icon'

import { Container } from './styles'

const FabZap: React.FC = () => {
  return (
    <Container
      href="https://api.whatsapp.com/send?phone=5511984829838&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Toque%20Bateria!"
      target="blank"
    >
      <Icon size="38px" name="LogoWhatsapp" pack="ionicons-solid" />
    </Container>
  )
}

export default FabZap
