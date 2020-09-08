import React from 'react';
import styled from 'styled-components';

function AboutPage() {
	return <h1>About</h1>;
}

const StyledAboutPage = styled(AboutPage)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default StyledAboutPage;
