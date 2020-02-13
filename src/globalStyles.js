import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    background-color: #0C0C0C;
    font-family: spotify-circular, spotify-circular-cyrillic,
    spotify-circular-arabic, spotify-circular-hebrew, Helvetica Neue, Helvetica,
    Arial, Hiragino Kaku Gothic Pro, Meiryo, MS Gothic, sans-serif;
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
  }

  #root {
    height: 100%;
  }


 
`;

export default GlobalStyle;
