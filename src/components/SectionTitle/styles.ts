import styled, { css } from 'styled-components'

import { SectionTitleBaseProps } from '~/types'
import { COLORS } from '~/styles/variables'

export const Container = styled.div<SectionTitleBaseProps>`
  margin-bottom: ${props => (props.noMargins ? '0' : '45px')};

  color: ${props => {
    if (props.theme === 'light' && props.subtitle) {
      return COLORS.textPrimary
    }

    if (props.theme === 'light') {
      return COLORS.textAccent
    }

    return COLORS.white
  }};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`

export const Title = styled.h2`
  margin: 0;
  font-size: 2.125em;
  font-weight: 700;
`

export const Subtitle = styled.p`
  margin-bottom: 0;
  font-size: 1.25em;
`
