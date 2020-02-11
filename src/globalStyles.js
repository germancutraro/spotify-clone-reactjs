import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Montserrat from './assets/fonts/Montserrat-Regular.ttf';
import MontserratLight from './assets/fonts/Montserrat-Light.ttf';
import MontserratSemibold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    background-color: #0C0C0C;
    font-family: Montserrat, sans-serif;
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

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat});
  }

  @font-face {
    font-family: 'Montserrat-Light';
    src: url(${MontserratLight});
  }

  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url(${MontserratSemibold});
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src: url(${MontserratBold});
  }
 
`;

export default GlobalStyle;
