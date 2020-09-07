import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { ReactComponent as Logo } from '../assets/logo.svg';
import { brownishGrey, greyBase } from '../utils';

function Header({ className }) {
	return (
		<div className={className}>
			<div className={className}>
				<Link to="/">
					<Logo className="logoSVG" />
				</Link>
			</div>
			<nav className={className}>
				<ul>
					<li className={className}>
						<Link to="/search" className={className}>
							Search
						</Link>
					</li>
					<li className={className}>
						<Link to="/how-it-works" className={className}>
							How it works
						</Link>
					</li>
					<li className={className}>
						<Link to="/about" className={className}>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

Header.propTypes = {
	className: PropTypes.string.isRequired,
};

const StyledHeader = styled(Header)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 10rem;

	& > nav > ul {
		display: flex;
		justify-content: space-between;
		align-items: center;

		color: ${brownishGrey};

		& > *:not(:first-child) {
			margin-left: 6rem;
		}

		& > ul > li {
			&:hover {
				color: ${greyBase};
			}
		}
	}
`;

export default StyledHeader;
