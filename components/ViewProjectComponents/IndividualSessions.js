import React from 'react';
import EmptySet from '../UI/EmptySet';
import Section from '../UI/Section';
import Session from './IndividualSessionsComponents/Session';

const IndividualSessions = ({ data }) => {
	return (
		<Section>
			{data.sessions.length === 0 && <EmptySet>No individual sessions </EmptySet>}
			{data.sessions.map(item => (
				<Session key={item.id} data={item} />
			))}
		</Section>
	);
};

export default IndividualSessions;
