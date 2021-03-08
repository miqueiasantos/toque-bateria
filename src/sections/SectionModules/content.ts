import { ContentBase, ModuleBase } from '~/types'

interface Content extends ContentBase {
  modules: ModuleBase[][]
}

const content: Content = {
  title: 'O Conteúdo mais completo totalmente estruturado para você',
  subtitle:
    'Confira todos os módulos que compõem o conteúdo que você terá acesso dentre vídeos, aulas e exercícios.',
  modules: [
    [
      {
        title: 'Grooves',
        number: 1,
      },
      {
        title: 'Viradas',
        number: 2,
      },
      {
        title: 'Técnica de Mãos',
        number: 3,
      },
      {
        title: 'Técnica de Pés',
        number: 4,
      },
      {
        title: 'Samba',
        number: 5,
      },
    ],
    [
      {
        title: 'Grooves de Shuffle',
        number: 6,
      },
      {
        title: 'Reggae',
        number: 7,
      },
      {
        title: 'Posicionamento / Montagem da Bateria',
        number: 8,
      },
      {
        title: 'Tocando com o Metrônomo',
        number: 9,
      },
    ],
  ],
  callToAction: 'Ver cronograma completo',
}

export default content
