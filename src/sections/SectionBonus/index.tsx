import React from 'react'
import Highlight from 'react-highlighter'

import { FlexContainer } from '~/components/Grid'
import SectionTitle from '~/components/SectionTitle'
import Card from '~/components/Card'
import CardTitle from '~/components/Card/CardTitle'
import CardContent from '~/components/Card/CardContent'
import CardImage from '~/components/Card/CardImage'
import Button from '~/components/Button'
import ModalVideo from '~/components/ModalVideo'

import { Container, CardContainer } from './styles'

import content from './content'

const SectionBonus: React.FC = () => {
  return (
    <Container>
      <SectionTitle center>
        <Highlight search={content.titleHighlight}>{content.title}</Highlight>
      </SectionTitle>

      <FlexContainer gap="20px" paddingBottom="large">
        {content.cards.map(item => (
          <>
            <CardContainer column={4} key={item.title.trim()}>
              <Card shadow withImage>
                <FlexContainer alignItems="center" flexDirection="column">
                  <CardImage image={item.image} />
                  <CardTitle>{item.title}</CardTitle>
                  <CardContent>{item.content}</CardContent>
                </FlexContainer>
              </Card>
            </CardContainer>
          </>
        ))}
      </FlexContainer>

      <FlexContainer justifyContent="center" paddingTop="large">
        <Button>{content.callToAction}</Button>
      </FlexContainer>
    </Container>
  )
}

export default SectionBonus
