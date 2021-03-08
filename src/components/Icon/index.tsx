import React from 'react'

import * as Material from '@styled-icons/material'
import * as IoniconsSolid from '@styled-icons/ionicons-solid'
import * as EntypoSocial from '@styled-icons/entypo-social'
import * as EvaOutline from '@styled-icons/evaicons-outline'
import * as Feather from '@styled-icons/feather'

import { SIZES } from '~/styles/variables'
import { IconBase } from '~/types'

const Icon: React.FC<IconBase> = ({ name, size = SIZES.large, pack }) => {
  const getIconPack = () => {
    switch (pack) {
      case 'ionicons-solid':
        return IoniconsSolid
      case 'entypo-social':
        return EntypoSocial
      case 'eva-outline':
        return EvaOutline
      case 'feather':
        return Feather
      default:
        return Material
    }
  }

  const DefaultIcon = getIconPack()[name]

  return <DefaultIcon size={size} />
}

export default Icon
