import React from 'react';
import styled from 'styled-components';

function HomePage() {
	return <h1>Home Page</h1>;
}

const StyledHomePage = styled(HomePage)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default StyledHomePage;
