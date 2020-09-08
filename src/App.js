import { Router } from '@reach/router';
import React from 'react';

import Home from './pages/home';
import Search from './pages/search';
import About from './pages/about';
import HowItWorks from './pages/how-it-works';
import { StyledLayout } from './components';
import { GlobalStyle } from './utils';

function App() {
	return (
		<>
			<GlobalStyle />
			<StyledLayout>
				<Router>
					<Home path="/" />
					<Search path="search" />
					<About path="about" />
					<HowItWorks path="how-it-works" />
				</Router>
			</StyledLayout>
		</>
	);
}

export default App;
