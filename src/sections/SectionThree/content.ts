import { ContentBase } from '~/types'

interface Content extends ContentBase {
  titleHighlight: string
}

const content: Content = {
  title: 'Otimize seus resultados com um Plano de Estudos personalizado',
  titleHighlight: 'Plano de Estudos',
  fullContent:
    'Não sabe por onde começar, nem organizar seus estudos? Aqui você vai fazer uma entrevista com o professor para saber o seu nível musical e direcionar seus estudos focando no que realmente você precisa estudar.',
  callToAction: 'Matricule-se',
}

export default content
