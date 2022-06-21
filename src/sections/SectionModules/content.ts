import { ContentBase, ModuleBase,CardBase, VideoBase } from '~/types'

interface Card extends CardBase {
    video?: VideoBase
  }

  
interface Content extends ContentBase {
  itemtitle: string,
  modules: ModuleBase[][],
  cards: Card[]
}

const content: Content = {
  title: 'O Toque Bateria tem tudo para te tornar um baterista completo, do básico ao avançado!',
  subtitle:
    'Você vai aprender desde como segurar as baquetas até como fazer viradas avançadas e tocar ritmos complexos como Samba e Jazz. Conheça o conteúdo:',
  modules: [
    [
      {
        title: 'Módulo montando a bateria / Posicionamento',
        number: 1,
      },
      {
        title: 'Módulo tocando com metrônomo',
        number: 2,
      },
      {
        title: 'Módulo Grooves',
        number: 3,
        description: '(Grooves em colcheia, com caixa fora do chimbau, com bumbo fora do chimbau, notas fantasmas, Grooves sincopados, Grooves lineares, Grooves com Paradiddle, diversas conduções dos Grooves)'
      },
      {
        title: 'Módulo Técnica de Mãos',
        number: 4,
        description: '(Aquecimento, diferentes tipos de Grip, desenvolvimento de pulsos, 7 Rudimentos essenciais, 40 Rudimentos, acentuações, exercícios para controle, precisão, velocidade e resistência, aplicação e distribuição dos Rudimentos na bateria)'
      }
    ],
    [
      {
        title: 'Módulo Técnica de pés',
        number: 5,
        description: 'Posicionamento, exercícios para controle, precisão, velocidade e resistência, toques simples, toques duplos em velocidade com pivot/gangorra/slide, combinações de maõs e pés, fraseado com mãos e pés, Grooves com toque duplo rápido, Viradas com bumbo'
      },
      {
        title: 'Módulo Viradas',
        number: 6,
        description: 'Viradas na caixa, distribuindo nos tambores, distribuindo com o bumbo, com acentuações, em sextinas, utilizando Rudimentos, Gospel Chops'
      },
      {
        title: 'Módulo Estilos Musicais',
        number: 7,
        description: 'Pop, Rock, Reggae, Shuffle, Samba, Jazz…'
      },
      {
        title: '4 bônus extra',
        number: 8,
        description: 'Módulo Tocando com Músicas, Módulo Teoria, Leitura e Escrita, Módulo Instrumento Complementar, Módulo Apreciação Musical'
      }
    ],
  ],
  itemtitle: "Confira algumas aulas:",
  cards: [
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/340478854',
        videoTitle: 'Fórmula de compasso - Compasso composto',
      },
      title: 'Teoria, Leitura e Escrita',
      content: '',
    },
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/469490169',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Tocando Músicas',
      content: '',
    },
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/481208373',
        videoTitle: 'Por que estudar outro instrumento?',
      },
      title: 'Instrumento Complementar',
      content: '',
    }
  ],
  callToAction: 'Ver cronograma completo',
}

export default content
