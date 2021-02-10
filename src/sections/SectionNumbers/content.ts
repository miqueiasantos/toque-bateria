interface Count {
  number: number
  numberSuffix?: string
  description: string
}

const content: Count[] = [
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
]

export default content
