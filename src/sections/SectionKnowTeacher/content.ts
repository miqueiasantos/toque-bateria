import { ContentBase, IconBase } from '~/types'

import avatar from '~/images/know-teacher/know-teacher.png'

interface Content extends ContentBase {
  avatar: string
  callToActionWithIcon: {
    icon: IconBase
    text: string
    url: string
  }
}

const content: Content = {
  title: 'Conheça Vitor Lambert',
  fullContent:
    'Vitor Lambert é apaixonado por didática e pedagogia. Leciona em seu estúdio particular desde 1998 e por 12 anos foi professor da EM&T (Escola de Música e Tecnologia), uma das mais renomadas escolas da América Latina. <br><br> Também foi professor e coordenou um importante projeto social voltado à alfabetização musical de jovens  e crianças carentes. <br><br> É autor do DVD e método “Toque Bateria” e já teve matérias, transcrições e estudos publicados pela revista Modern drummer e sites Batera e O Baterista. <br><br> Em 2021 lançou seu segundo livro: “Estude Música Melhor - Um guia prático para organizar e otimizar seus estudos” e com ele vem ajudando estudantes de música de diversos instrumentos a entender e melhorar o processo de aprendizado musical.',
  avatar: avatar,
  callToActionWithIcon: {
    icon: {
      name: 'Instagram',
      pack: 'entypo-social',
    },
    text: 'Ver Perfil no Instagram',
    url: 'https://www.instagram.com/_vitor_lambert/',
  },
}

export default content
