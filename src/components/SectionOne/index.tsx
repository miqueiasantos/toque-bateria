import React from 'react'

import { Row } from '~/styles/Grid'

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
      <SectionTitle sectionTitle={content.sectionTitle} center />

      <Row>
        {content.cards.map(item => {
          return (
            <Card key={item.title.trim()}>
              <Badge>
                <Icon icon={item.icon.name} iconPack={item.icon.pack} />
              </Badge>
              <CardTitle>{item.title}</CardTitle>
              <CardContent>{item.content}</CardContent>
            </Card>
          )
        })}
      </Row>
    </Container>
  )
}

export default SectionOne
