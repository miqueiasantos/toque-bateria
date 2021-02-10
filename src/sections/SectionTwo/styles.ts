import styled from 'styled-components'

const ContentText = styled.p`
  margin: 0;
  font-size: 1.25em;
`

export const ShortContent = styled(ContentText)`
  margin: 10px 0 0;
  font-weight: 500;
`

export const FullContent = styled(ContentText)`
  margin: 0 0 10px;
  font-weight: 300;
`

export const CardContent = styled.p`
  font-weight: 300;
  margin-bottom: 0;
`
