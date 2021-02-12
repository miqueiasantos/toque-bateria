export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexAligments =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evently'
  | 'stretch'
  | 'self-start'
  | 'self-end'

export type Margins = 'small' | 'normal' | 'large' | 'larger'

export type ColumnSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Colors =
  | 'primary'
  | 'primaryAccent'
  | 'secondary'
  | 'secondaryAccent'
  | 'textPrimary'
  | 'textSecondary'
  | 'textAccent'
  | 'white'

export interface IconBase {
  name: string
  pack?: string
}

export interface CardBase {
  icon?: IconBase
  image?: string
  title?: string
  content?: string
}

export interface VideoBase {
  videoSrcURL: string
  videoTitle: string
}

export interface ContentBase {
  title: string
  subtitle?: string
  shortContent?: string
  fullContent?: string
  callToAction?: string
  video?: VideoBase
  videos?: VideoBase[]
  cards?: CardBase[]
}

export interface SectionTitleBaseProps {
  center?: boolean
  theme?: 'light' | 'dark'
  subtitle?: boolean
  noMargins?: boolean
}
