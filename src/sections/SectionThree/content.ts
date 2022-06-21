import { ContentBase } from '~/types'

interface Content extends ContentBase {
  titleHighlight: string
}

const content: Content = {
  title: 'Otimize seus resultados com a mentoria Estude Música Melhor!',
  titleHighlight: 'Estude Música Melhor!',
  fullContent:
    'Não sabe por onde começar, nem organizar seus estudos? Se sente frustrado com seus resultados? Tem a sensação de que está sempre tocando a mesma coisa e não sai do luga<br><br>Muita gente passa por isso por não saber estudar de uma maneira correta e eficiente.<br><br>Com esta mentoria você entenderá como organizar seu material, fazer um planejamento e montar seu plano e cronograma de estudos.<br><br>Também aprenderá a arranjar tempo para estudar e criar o hábito de treinar, controlar suas expectativas e frustrações, ser mais eficiente e otimizar os resultados com diversas dicas de estudo, além de poder tirar dúvidas diretamente com o professor',
  callToAction: 'Inscreva-se hoje mesmo e garanta esse bônus exclusivo',
}

export default content
