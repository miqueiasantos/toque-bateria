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
  title: 'Assine agora por apenas R$ 29,90/mês',
  plans: [
    {
        type: 'Assinatura',
        fullPrice: '29,90',
        installmentsPrice: 0,
        description: 'Tenha acesso ao material completo e atualizações semanais. Pagamento recorrente no boleto ou cartão',
        features: [],
        callToAction: 'https://sun.eduzz.com/1461454',
      },
      {
        type: 'Outros Planos',
        fullPrice: '',
        installmentsPrice: 0,
        description: 'Consulte pelo WhatsApp os valores de plano anual e vitalício',
        features: [],
        callToAction: 'https://api.whatsapp.com/send?phone=5511984829838&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Toque%20Bateria!',
      },
    // {
    //   type: 'TRIMESTRAL',
    //   fullPrice: 147,
    //   installmentsPrice: 14.7,
    //   description: 'Tenha acesso ao material completo por 3 meses.',
    //   features: [
    //     {
    //       title: 'Todos os Bônus Extras',
    //       active: true,
    //     },
    //     {
    //       title: 'Estude Junto',
    //       active: true,
    //     },
    //     {
    //       title: 'Plano de Estudo',
    //       active: false,
    //     },
    //   ],
    //   callToAction: 'https://sun.eduzz.com/667851',
    // },
    // {
    //   type: 'ANUAL',
    //   fullPrice: 347,
    //   installmentsPrice: 34.7,
    //   description: 'Tenha acesso ao material completo por 1 ano.',
    //   features: [
    //     {
    //       title: 'Todos os Bônus Extras',
    //       active: true,
    //     },
    //     {
    //       title: 'Estude Junto',
    //       active: true,
    //     },
    //     {
    //       title: 'Plano de Estudo',
    //       active: true,
    //     },
    //   ],
    //   callToAction: 'https://sun.eduzz.com/640493',
    // },
    // {
    //   type: 'VITALÍCIO',
    //   fullPrice: 647,
    //   installmentsPrice: 64.7,
    //   description: 'Tenha acesso vitalício ao material completo.',
    //   features: [
    //     {
    //       title: 'Todos os Bônus Extras',
    //       active: true,
    //     },
    //     {
    //       title: 'Estude Junto',
    //       active: true,
    //     },
    //     {
    //       title: 'Plano de Estudo',
    //       active: true,
    //     },
    //   ],
    //   callToAction: 'https://sun.eduzz.com/667855',
    // },
  ],
  warranty: {
    days: 7,
    shortDescription: 'Garantia de satisfação de 7 dias:',
    fullDescription:
      'Você tem 7 dias para acessar o conteúdo e assistir às aulas. Se nesse prazo você não gostar, basta pedir o reembolso integral!',
  },
}

export default content
