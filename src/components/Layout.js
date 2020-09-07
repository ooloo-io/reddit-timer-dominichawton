import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line import/prefer-default-export
function Layout({ children, className }) {
	return (
		<div className={className}>
			<main className={className}>
				<Header />
				{children}
			</main>
			<Footer className="footer" />
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
	className: PropTypes.string.isRequired,
};

// eslint-disable-next-line import/prefer-default-export
export const StyledLayout = styled(Layout)`
	min-height: 100vh;
	width: 90vw;
	max-width: 1200px;
	margin: 0 auto;
	& > main {
		flex-grow: 2;
	}

	& > ${Footer} {
		flex-grow: 1;
	}
`;
