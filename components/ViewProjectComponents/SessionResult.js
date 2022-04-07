import React, { useState } from 'react';
import { response, sessions } from '../../dummybase';
import Section from '../UI/Section';
import Feedback from './SessionResultComponents/Feedback';
import Annotations from './SessionResultComponents/Annotations';
import TopSession from './SessionResultComponents/TopSession';
import QuestionnaireResponses from './SessionResultComponents/QuestionnaireResponses';

const SessionResult = () => {
	const [route, setRoute] = useState('/');
	const sessionData = sessions[0];
	const responseData = response;

	return (
		<div className='SessionResult'>
			<Section>
				<TopSession data={sessionData} />
				<Annotations />
				<Feedback />
				<QuestionnaireResponses />
			</Section>
			{/* STYLE */}
			<style jsx>{`
				.SessionResult :global(.title) {
					margin: 20px 0;
				}

				.SessionResult :global(.subSection) {
					border-top: var(--border);
					padding-top: 20px;
					margin-top: 25px;
				}
			`}</style>
		</div>
	);
};

export default SessionResult;
