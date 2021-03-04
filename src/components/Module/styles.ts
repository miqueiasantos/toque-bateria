import styled from 'styled-components'
import { COLORS, SIZES } from '~/styles/variables'

export const Container = styled.div`
  margin-bottom: ${SIZES.large};
`

export const SubmoduleContainer = styled.div`
  margin-bottom: ${SIZES.large};
`

export const SubmoduleTitle = styled.div`
margin-bottom: ${SIZES.small};
  color: ${COLORS.secondaryAccent};
  font-size: 1.25em;
`

export const Lesson = styled.p`
  margin: 0;
  color: ${COLORS.textAccent};
  font-size: 1.125em;
  line-height: 1.5;
`
