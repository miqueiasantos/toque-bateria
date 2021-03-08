import React from 'react'

import * as Grid from '~/components/Grid'

import Badge from '~/components/Badge'
import Card from '~/components/Card'
import CardTitle from '~/components/Card/CardTitle'
import CardContent from '~/components/Card/CardContent'
import Icon from '~/components/Icon'
import SectionTitle from '~/components/SectionTitle'

import content from './content'

import { Container } from './styles'

const SectionOne: React.FC = () => {
  return (
    <>
      <SectionTitle center>{content.title}</SectionTitle>
      <Grid.FlexRow marginBottom="larger">
        {content.cards.map(item => {
          return (
            <Grid.FlexColumn md={6} lg={3} key={item.title.trim()} marginBottom="normal">
              <Card shadow>
                <Grid.Flex alignItems="center" flexDirection="column">
                  <Badge>
                    <Icon {...item.icon} />
                  </Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardContent>{item.content}</CardContent>
                </Grid.Flex>
              </Card>
            </Grid.FlexColumn>
          )
        })}
      </Grid.FlexRow>
    </>
  )
}

export default SectionOne
