import React from 'react';
import styled from 'styled-components';

function HowItWorksPage() {
	return <h1>How it works</h1>;
}

const StyledHowItWorksPage = styled(HowItWorksPage)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default StyledHowItWorksPage;
