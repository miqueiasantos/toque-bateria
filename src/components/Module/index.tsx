import React from 'react'

import { ModuleBase } from '~/types'
import Video from '../Video'

import ModuleTitle from './ModuleTitle'

import {
  Container,
  SubmoduleTitle,
  SubmoduleContainer,
  Lesson,
  Image,
  VideoContainer,
} from './styles'

interface ModuleProps extends ModuleBase {}

const Module: React.FC<ModuleProps> = ({
  title,
  number,
  lessons,
  submodules,
  image,
  video,
}) => {
  return (
    <Container>
      {video && (
        <VideoContainer>
          <Video {...video} />
        </VideoContainer>
      )}

      <ModuleTitle title={title} number={number} />

      {lessons &&
        lessons.map(lesson => <Lesson key={lesson.trim()}>{lesson}</Lesson>)}

      {submodules &&
        submodules.map(submodule => (
          <SubmoduleContainer key={submodule.title.trim()}>
            <SubmoduleTitle>{submodule.title}</SubmoduleTitle>
            {submodule.lessons &&
              submodule.lessons.map(lesson => (
                <Lesson key={lesson.trim()}>{lesson}</Lesson>
              ))}
          </SubmoduleContainer>
        ))}

      {image && <Image src={image} />}
    </Container>
  )
}

export default Module
