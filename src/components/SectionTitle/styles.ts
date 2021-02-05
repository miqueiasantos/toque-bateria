import styled, { css } from 'styled-components'

import { COLORS } from '~/styles/variables'

import { SectionTitleProps } from '.'

export const Container = styled.div<SectionTitleProps>`
  margin-bottom: 45px;

  color: ${props =>
    props.theme === 'light' ? COLORS.textAccent : COLORS.white};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`

export const Title = styled.h2`
  margin: 0;
  font-size: 2.125em;
  font-weight: 400;
`

export const Description = styled.p`
  margin-bottom: 0;
`
