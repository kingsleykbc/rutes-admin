import React from 'react';
import Section from '../UI/Section';
import Feedback from './SessionResultComponents/Feedback';
import Annotations from './SessionResultComponents/Annotations';
import TopSession from './SessionResultComponents/TopSession';
import QuestionnaireResponses from './SessionResultComponents/QuestionnaireResponses';
import { useRouter } from 'next/router';
import CompletedTests from './SessionResultComponents/CompletedTests';

/**
 * INDIVIDUAL SESSION RESULT
 */
const SessionResult = ({ data }) => {
	const {
		query: { sessionID }
	} = useRouter();
	const hasQuestionnaires = data.preQuestionnaire.length > 0 || data.postQuestionnaire.length > 0;
	const session = data.sessions.find(item => item.id === sessionID);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='SessionResult'>
			<Section maxWidth='1000px'>
				<TopSession data={session} />
				<CompletedTests session={session} />
				<Annotations screenshots={data.screenshots} session={session} />
				<Feedback session={session} />
				{hasQuestionnaires && <QuestionnaireResponses data={data} sessionID={sessionID} />}
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
