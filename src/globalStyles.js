import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Montserrat from './assets/fonts/Montserrat-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    background-color: #0C0C0C;
    font-family: Montserrat, sans-serif;
  }

  * ,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }
 
`;

export default GlobalStyle;
