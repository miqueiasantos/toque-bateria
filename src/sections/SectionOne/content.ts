import { CardBase, ContentBase } from '~/types'

interface Content extends ContentBase {
  cards: CardBase[]
}

const content: Content = {
  title: 'Aprenda bateria com um conteúdo pensado para você',
  cards: [
    {
      title: 'Conteúdo Estruturado',
      content:
        'Aprenda e estude grooves, viradas e músicas, além das técnicas de mãos e pés seguindo um conteúdo estruturado para melhor aprendizado.',
      icon: {
        name: 'Apps',
        pack: 'ionicons-solid',
      },
    },
    {
      title: 'Veja e Reveja',
      //   content:
      //     'Estude na hora que quiser com mais de 750 vídeos com partitura na tela e PDF. São mais de 1.000 exercícios em mais de 40 horas de conteúdo.',
      content:
        'Estude na hora que quiser com mais de 750 vídeos com partitura na tela e PDF. São mais de  40 horas de conteúdo e toda semana tem aula nova no ar!',
      icon: {
        name: 'PlayCircle',
        pack: 'material',
      },
    },
    {
      title: 'Estude Junto',
      content:
        'Todos os exercícios estão gravados em 3 andamentos diferentes para você acompanhar, estudar direito e evoluir no seu tempo.',
      icon: {
        name: 'LocalLibrary',
        pack: 'material',
      },
    },
    {
      title: 'Tudo Sobre Música',
      content:
        'Entre no mundo da música aprendendo teoria, leitura, escrita e ainda um instrumento complementar.',
      icon: {
        name: 'Headset',
        pack: 'material',
      },
    },
  ],
}

export default content
