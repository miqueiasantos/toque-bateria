import styled from 'styled-components'
import { COLORS, RADIUS, SIZES } from '~/styles/variables'

export const Container = styled.div`
  padding: ${SIZES.normal} ${SIZES.small};
  background-color: ${COLORS.white};
  border-radius: ${RADIUS.normal};
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 20px;
  }
`
