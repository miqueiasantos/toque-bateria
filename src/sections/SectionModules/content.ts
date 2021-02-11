import { ContentBase } from '~/types'

interface Module {
  title
}

interface Content extends ContentBase {
  modules: Module[]
}

const content: Content = {
  title: 'O Conteúdo mais completo totalmente estruturado para você',
  subtitle:
    'Confira todos os módulos que compõem o conteúdo que você terá acesso dentre vídeos, aulas e exercícios.',
  modules: [
    {
      title: 'Grooves',
    },
    {
      title: 'Viradas',
    },
    {
      title: 'Técnica de Mãos',
    },
    {
      title: 'Técnica de Pés',
    },
    {
      title: 'Samba',
    },
    {
      title: 'Grooves de Shuffle',
    },
    {
      title: 'Reggae',
    },
    {
      title: 'Posicionamento / Montagem da Bateria',
    },
    {
      title: 'Tocando com o Metrônomo',
    },
  ],
  callToAction: 'Ver cronograma completo',
}

export default content
