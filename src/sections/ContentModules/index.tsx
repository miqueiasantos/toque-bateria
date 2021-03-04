import React from 'react'
import Module from '~/components/Module'

import { FlexContainer } from '~/components/Grid'
// import { Container } from './styles';

import content from './content'

const ContentModules: React.FC = () => {
  return (
    <FlexContainer gap="30px">
      {content.modules.map(column => (
        <FlexContainer column={6} flexDirection="column">
          {column.map(module => (
            <Module {...module} />
          ))}
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default ContentModules
