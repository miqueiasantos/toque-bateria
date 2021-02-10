export interface Icon {
  name: string
  pack?: string
}

export interface Card {
  icon?: Icon
  title?: string
  content?: string
}

export interface Video {
  videoSrcURL: string
  videoTitle: string
}

export interface ContentBase {
  title: string
  subTitle?: string
  shortContent?: string
  fullContent?: string
  callToAction?: string
  video?: Video
  cards?: Card[]
}
