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
    font-size: 62.5%;
    width: 90%;
    max-width: 1440px;
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

  /* Font sizing based on the Major Third scale https://type-scale.com */

  h1 {
    font-size: 4.883rem;
  }

  h2 {
    font-size: 3.906rem;
  }

  h3 {
    font-size: 3.125rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size:2rem;
  }

  p, a {
    font-size: 1.6rem;
  }
`;
