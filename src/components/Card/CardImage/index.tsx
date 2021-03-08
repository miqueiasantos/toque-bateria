import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Container, PlayContainer } from './styles'
import Icon from '~/components/Icon'

export interface CardImageProps {
  image?: string
  videoThumb?: boolean
}

const CardImage: React.FC<CardImageProps> = ({ image, videoThumb }) => {
  const [thumb, setThumb] = useState()

  const getVideoId = (url: string): string => {
    const regex = new RegExp(/https:\/\/player.vimeo.com\/video\/(.*)/g)
    const id = regex.exec(url)[1] || ''
    return id
  }

  const loadThumb = async (url: string) => {
    const VIMEO_API = 'https://vimeo.com/api/v2/video/'

    try {
      const { data } = await axios.get(`${VIMEO_API}${getVideoId(url)}.json`)

      setThumb(data[0].thumbnail_large)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    videoThumb && loadThumb(image)
  }, [])

  return (
    <Container image={thumb}>
      <PlayContainer>
        <Icon name="PlayCircleOutline" size="32" />
      </PlayContainer>
    </Container>
  )
}

export default CardImage
