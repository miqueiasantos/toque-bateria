import { ContentBase, IconBase } from '~/types'

interface SocialMedia {
  url: string
  icon: IconBase
}

interface Content extends Omit<ContentBase, 'title'> {
  copyright: string
  socialMedias: SocialMedia[]
}

const year = new Date().getFullYear()

const content: Content = {
  socialMedias: [
    {
      url: 'https://www.youtube.com/user/vitorlambert',
      icon: {
        name: 'YoutubeWithCircle',
        pack: 'entypo-social',
      },
    },
    {
      url: 'https://www.instagram.com/vitorlambertmusic/',
      icon: {
        name: 'InstagramWithCircle',
        pack: 'entypo-social',
      },
    },
    {
      url: 'https://www.facebook.com/lambertvitor',
      icon: {
        name: 'FacebookWithCircle',
        pack: 'entypo-social',
      },
    },
  ],
  copyright: `Copyright ${year} @ Toque Bateria - Todos os direitos reservados`,
}

export default content
