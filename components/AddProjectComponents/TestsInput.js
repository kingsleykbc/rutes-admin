import { useState } from 'react';
import { isValidURL } from '../../functions/general';
import Button from '../UI/Button';
import ButtonLightbox from '../UI/ButtonLightbox';
import Container from '../UI/Container';
import EmptySet from '../UI/EmptySet';
import { HighlightedText } from '../UI/TextComponents';
import AddTestItem from './TestInputComponents/AddTestItem';
import TestItem from './TestInputComponents/TestItem';

const TestsInput = ({ data, onChange, onDelete, url }) => {
	// ===================================================================================================================
	//  UI
	// ===================================================================================================================

	if (!isValidURL(url)) return <HighlightedText>Enter valid URL to set Tests</HighlightedText>;
	return (
		<div className='TestsInput'>
			<h4>Tests/Prompts</h4>

			<Container margin='20px 0' className='tests'>
				<EmptySet margin='0' data={data}>
					No Tests Added
				</EmptySet>
				{data.map((item, index) => (
					<TestItem key={item.route} data={item} onDelete={() => onDelete(index)} />
				))}
			</Container>
			<Container align='center'>
				<ButtonLightbox label='Add test'>
					{({ toggle }) => (
						<AddTestItem url={url} toggle={toggle} addedRoutes={data.map(item => item.route)} onAdd={test => onChange([...data, test])} />
					)}
				</ButtonLightbox>
			</Container>
		</div>
	);
};

export default TestsInput;
