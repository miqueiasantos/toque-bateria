import React from 'react'

import * as Material from '@styled-icons/material'
import * as IoniconsSolid from '@styled-icons/ionicons-solid'
import * as IoniconsSharp from '@styled-icons/ionicons-sharp'
import { SIZES } from '~/styles/variables'

interface IconProps {
  name: string
  size?: string
  title?: string
  iconPack?: string
}

const Icon: React.FC<IconProps> = ({ name, size = SIZES.large, iconPack }) => {
  const getIconPack = () => {
    switch (iconPack) {
      case 'ionicons-solid':
        return IoniconsSolid
      case 'ionicons-sharp':
        return IoniconsSharp
      default:
        return Material
    }
  }

  const DefaultIcon = getIconPack()[name]

  return <DefaultIcon size={size} />
}

export default Icon
