import { ContentBase } from '~/types'

interface Content extends ContentBase {
  fullContentHighlight: string
}

const content: Content = {
  video: {
    videoSrcURL: 'https://www.youtube.com/embed/q_8u3c4V6sE',
    videoTitle: 'A virada mais famosa do mundo!',
  },
  title: 'O único curso com o recurso Estude Junto!',
  shortContent: 'Aproveite melhor seu tempo de estudo:',
  fullContent:
    'Você terá acesso ao Estude Junto, onde poderá estudar todos os exercícios em 3 andamentos diferentes, em vídeos com alta qualidade de som e imagem.',
  fullContentHighlight: 'Estude Junto',
  cards: [
    {
      icon: { name: 'SlowMotionVideo' },
      content: 'Todos os exercícios em três andamentos diferentes',
    },
    {
      icon: { name: 'Audiotrack' },
      content: 'Saiba exatamente o som que deve tirar do instrumento',
    },
  ],
}

export default content
