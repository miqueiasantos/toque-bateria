import React from 'react'

import * as Material from '@styled-icons/material'
import * as IoniconsSolid from '@styled-icons/ionicons-solid'
import * as EntypoSocial from '@styled-icons/entypo-social'

import { SIZES } from '~/styles/variables'
import { IconBase } from '~/types'

const Icon: React.FC<IconBase> = ({ name, size = SIZES.large, pack }) => {
  const getIconPack = () => {
    switch (pack) {
      case 'ionicons-solid':
        return IoniconsSolid
      case 'entypo-social':
        return EntypoSocial
      default:
        return Material
    }
  }

  const DefaultIcon = getIconPack()[name]

  return <DefaultIcon size={size} />
}

export default Icon
