import React from 'react';
import Container from '../../UI/Container';

const DetailsSection = ({ children, title }) => {
	return (
		<Container padding='20px 0' hasBorder borderDirections='b'>
			<h3>{title}</h3>
			<div style={{ marginTop: '15px' }}>{children}</div>
		</Container>
	);
};

export default DetailsSection;
