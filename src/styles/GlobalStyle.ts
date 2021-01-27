import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
