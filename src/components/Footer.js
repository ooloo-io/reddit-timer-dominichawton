import PropTypes from 'prop-types';
import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { ReactComponent as Sign } from '../assets/sign.svg';
import { greyBase } from '../utils';

const Footer = ({ className }) => (
	<footer className={className}>
		<div className={className}>
			<a href="https://ooloo.io/employers" className={className}>
				ooloo.io
			</a>
		</div>
		<Sign />
		<div className={className}>
			<Link to="/terms" className={className}>
				Terms & Privacy
			</Link>
		</div>
	</footer>
);

Footer.propTypes = {
	className: PropTypes.string.isRequired,
};

const StyledFooter = styled(Footer)`
	color: ${greyBase};
	text-align: center;
	display: flex;
	height: 10rem;
	justify-content: space-between;
	align-items: center;
	x & > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default StyledFooter;
