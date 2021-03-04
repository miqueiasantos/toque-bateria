import React from 'react'
import Module from '~/components/Module'

import { FlexContainer } from '~/components/Grid'
// import { Container } from './styles';

import content from './content'

const ContentModules: React.FC = () => {
  return (
    <FlexContainer gap="30px">
      {content.modules.map((column, index) => (
        <FlexContainer
          key={column[index].title.trim()}
          column={6}
          flexDirection="column"
        >
          {column.map(module => (
            <Module key={module.title.trim()} {...module} />
          ))}
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default ContentModules
