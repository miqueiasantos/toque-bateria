import React from 'react'
import Module from '~/components/Module'

import * as Grid from '~/components/Grid'
// import { Container } from './styles';

import content from './content'

const ContentModules: React.FC = () => {
  return (
    <Grid.FlexRow gap="30px">
      {content.modules.map((column, index) => (
        <Grid.FlexColumn
          key={column[index].title.trim()}
          md={6}
          flexDirection="column"
        >
          {column.map(module => (
            <Module key={module.title.trim()} {...module} />
          ))}
        </Grid.FlexColumn>
      ))}
    </Grid.FlexRow>
  )
}

export default ContentModules
