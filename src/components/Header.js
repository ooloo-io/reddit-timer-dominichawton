import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { Logo } from '../assets/logo.svg';

function Header() {
	return (
		<div className="container">
			<div className="logoContainer">
				<Link to="/">
					<Logo className="logoSVG" />
				</Link>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<Link to="/search" className="nav_item">
							Search
						</Link>
					</li>
					<li>
						<Link to="/how-it-works" className="nav_item">
							How it works
						</Link>
					</li>
					<li>
						<Link to="/about" className="nav_item">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

const StyledHeader = styled(Header)`
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logoContainer {
	}

	.logoSVG {
	}

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > *:not(:first-child) {
			margin-left: 2rem;
		}

		&_item {
		}
	}
`;

export default StyledHeader;
