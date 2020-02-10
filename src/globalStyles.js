import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    height: 100%;
    background-color: #1a1a1a;
    /* font-family: 'Roboto', sans-serif; */
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
