import styled from 'styled-components'
import { COLORS } from '~/styles/variables'

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${COLORS.primaryAccent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.textAccent};
`
