import { Count, ContentBase } from '~/types'

interface Content extends ContentBase {
    cards: Count[]
}

const content: Content = {
title: 'Toda semana tem aula nova!',
cards: [
    {
      number: 300,
      description: 'aulas',
    },
    {
      number: 750,
      description: 'vídeos',
    },
    {
      number: 1000,
      description: 'exercícios',
    },
    {
      number: 40,
      numberSuffix: 'horas',
      description: 'de conteúdo',
    },
],
}
  

export default content
