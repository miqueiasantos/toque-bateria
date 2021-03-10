import { ContentBase, CardBase, VideoBase } from '~/types'

interface Card extends CardBase {
  video?: VideoBase
}

interface Content extends ContentBase {
  titleHighlight?: string
  cards: Card[]
}

const content: Content = {
  title: 'Matricule-se já e garanta mais 4 bônus extras!',
  titleHighlight: '4 bônus',
  cards: [
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/340478854',
        videoTitle: 'Fórmula de compasso - Compasso composto',
      },
      title: 'Teoria, Leitura e Escrita',
      content:
        'Tudo o que você precisa saber para se tornar um músico completo, ler partituras e escrever suas próprias idéias!',
    },
    {
      video: {
        // TODO: update this video
        videoSrcURL: 'https://player.vimeo.com/video/340478854',
        videoTitle: 'A virada mais famosa do mundo!',
      },
      title: 'Tocando Músicas',
      content:
        'Coloque seu treinamento em prática criando seu repertório! São diversas músicas em diferentes estilos explicadas detalhadamente e com partitura completa.',
    },
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/481208373',
        videoTitle: 'Por que estudar outro instrumento?',
      },
      title: 'Instrumento Complementar',
      content:
        'Torne-se um baterista mais musical, entendendo acordes, melodias, ciclos harmônicos, escalas e tocando músicas.',
    },
    {
      video: {
        videoSrcURL: 'https://player.vimeo.com/video/481203916',
        videoTitle: 'CDBM - Conceito',
      },
      title: 'Apreciação Musical',
      content:
        'Uma seleção especial de álbuns, artistas e estilos musicais para você enriquecer seu vocabulário e repertório de boa música.',
    },
  ],
  callToAction: 'Matricule-se',
}

export default content
