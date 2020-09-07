import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Sign } from '../assets/sign.svg';
import { greyBase } from '../utils';

const Footer = ({ className }) => (
	<footer className={className}>
		<div className={className}>
			<p className={className}>ooloo.io</p>
		</div>
		<Sign />
		<div className={className}>
			<p className={className}>Terms & Privacy</p>
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
