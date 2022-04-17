import React from 'react';
import { sessions } from '../../dummybase';
import Section from '../UI/Section';
import Session from './IndividualSessionsComponents/Session';

const IndividualSessions = ({ data }) => {
	return (
		<Section>
			{data.sessions.map(item => (
				<Session key={item.sessionID} data={item} />
			))}
		</Section>
	);
};

export default IndividualSessions;
