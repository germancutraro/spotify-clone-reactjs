import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    background-color: #121212;
    font-family: spotify-circular, spotify-circular-cyrillic,
    spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica,
    Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
    letter-spacing: .015rem;
    font-weight: 400;
    line-height: 20px;
  font-size: 14px;

  }

  :root {
    --opacity: 0;
    --color: #121212;
    --scroll-top: 0;
  }

  a {
    text-decoration: none;
    cursor: default;
  }

  ul {
    list-style: none;
  }

  * ,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    max-height: 100vh;
  }

`;

export default GlobalStyle;
