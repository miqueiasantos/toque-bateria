import { ContentBase, Plan } from '~/types'

interface Content extends ContentBase {
  plans: Plan[]
  warranty: {
    days: number
    shortDescription: string
    fullDescription: string
  }
}

const content: Content = {
  title: 'Escolha o plano ideal para você e aprenda no seu ritmo',
  plans: [
    {
      type: 'TRIMESTRAL',
      fullPrice: 147,
      installmentsPrice: 14.7,
      description: 'Tenha acesso ao material completo por 3 meses.',
      features: [
        {
          title: 'Todos os Bônus Extras',
          active: true,
        },
        {
          title: 'Estude Junto',
          active: true,
        },
        {
          title: 'Plano de Estudo',
          active: false,
        },
      ],
      callToAction: 'https://sun.eduzz.com/667851',
    },
    {
      type: 'ANUAL',
      fullPrice: 347,
      installmentsPrice: 34.7,
      description: 'Tenha acesso ao material completo por 1 ano.',
      features: [
        {
          title: 'Todos os Bônus Extras',
          active: true,
        },
        {
          title: 'Estude Junto',
          active: true,
        },
        {
          title: 'Plano de Estudo',
          active: true,
        },
      ],
      callToAction: 'https://sun.eduzz.com/640493',
    },
    {
      type: 'VITALÍCIO',
      fullPrice: 647,
      installmentsPrice: 64.7,
      description: 'Tenha acesso vitalício ao material completo.',
      features: [
        {
          title: 'Todos os Bônus Extras',
          active: true,
        },
        {
          title: 'Estude Junto',
          active: true,
        },
        {
          title: 'Plano de Estudo',
          active: true,
        },
      ],
      callToAction: 'https://sun.eduzz.com/667855',
    },
  ],
  warranty: {
    days: 7,
    shortDescription: 'Garantia de satisfação de 7 dias:',
    fullDescription:
      'Você tem 7 dias para acessar o conteúdo e assistir às aulas. Se nesse prazo você não gostar, basta pedir o reembolso integral!',
  },
}

export default content
