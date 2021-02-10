import React from 'react'

import { FlexContainer } from '~/components/Grid'

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
    <Container>
      <SectionTitle center>{content.title}</SectionTitle>

      <FlexContainer gap="20px">
        {content.cards.map(item => {
          return (
            <FlexContainer column={4} key={item.title.trim()}>
              <Card shadow>
                <FlexContainer alignItems="center" flexDirection="column">
                  <Badge>
                    <Icon {...item.icon} />
                  </Badge>
                  <CardTitle>{item.title}</CardTitle>
                  <CardContent>{item.content}</CardContent>
                </FlexContainer>
              </Card>
            </FlexContainer>
          )
        })}
      </FlexContainer>
    </Container>
  )
}

export default SectionOne
