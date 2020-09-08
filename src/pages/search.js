import React from 'react';
import styled from 'styled-components';

function SearchPage() {
	return <h1>Search</h1>;
}

const StyledSearchPage = styled(SearchPage)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default StyledSearchPage;
