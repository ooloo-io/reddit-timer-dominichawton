import React from 'react';
import { createGlobalStyles } from 'styled-components';

const GlobalStyle = createGlobalStyles`
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

   a,
   a::visited {
     color: inherit;
     text-decoration: none;
   }

   ul {
     list-style: none;
   }
`;

function App() {
	return (
		<div>
			<GlobalStyle />
			App Placeholder
		</div>
	);
}

export default App;
