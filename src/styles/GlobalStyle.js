import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&display=swap')
  
  ${normalize()};

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: "Bitter", Georgia, Times, serif;
  }

  a,
  a::visited {
     color: inherit;
     text-decoration: none;
  }

  ul {
     list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Montserrat", Georgia, Times, serif;
  }
`;
