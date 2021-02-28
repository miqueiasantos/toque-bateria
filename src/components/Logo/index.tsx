import React from 'react'

import LogoHeader from '~/images/logo-header.png'
import LogoFooter from '~/images/logo-footer.png'

type LogoType = 'header' | 'footer'
interface LogoProps {
  type?: LogoType
  siteName?: string
}

const Logo: React.FC<LogoProps> = ({ type = 'header', siteName }) => {
  switch (type) {
    case 'header':
      return <img src={LogoHeader} alt={siteName} height="65px" />
    case 'footer':
      return <img src={LogoFooter} alt={siteName} height="193px" />

    default:
      return <img src={LogoHeader} alt={siteName} />
  }
}

export default Logo
