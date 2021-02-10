import { createGlobalStyle } from 'styled-components'
import { COLORS } from './variables'

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
  }

  .highlight {
    background-color: inherit;
    color: ${COLORS.secondaryAccent}
  }
`

export default GlobalStyle
