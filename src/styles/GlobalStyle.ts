import { createGlobalStyle } from 'styled-components'
import { COLORS } from './variables'

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  *::selection {
    color: ${COLORS.textPrimary};
    background-color: ${COLORS.secondary}
  }

  body {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 1px;
    @media screen and (min-width: 768px) {
      padding-top: 110px;
    }
  }

  a {
    text-decoration: none;
  }

  .highlight {
    background-color: inherit;
    color: ${COLORS.secondaryAccent}
  }
  .btn-link {
    height: 48px;
    padding: 0 20px;
    border-radius: 4px;
    color: #fff;
    background-color: #FF190C;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-weight: 700;
  }
`

export default GlobalStyle
