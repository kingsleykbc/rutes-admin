import React from 'react';
import QuestionItem from '../AddProjectComponents/QuestionnaireInputComponents/QuestionItem';
import TestItem from '../AddProjectComponents/TestInputComponents/TestItem';
import Section from '../UI/Section';
import DetailsSection from './DetailsComponents/DetailsSection';
import TopSection from './DetailsComponents/TopSection';

const Details = ({ data }) => {
	return (
		<Section>
			{/* TOP SECTION */}
			<TopSection data={data} />

			{/* DESCRIPTION */}
			<DetailsSection title='Description'>
				<p>{data.description}</p>
			</DetailsSection>

			{/* DETAILS */}
			<DetailsSection title='Details'>
				<div className='details'>
					<p className='key'>Project Key</p>
					<p>{data.projectKey}</p>

					<p className='key'>URL</p>
					<p>{data.url}</p>

					<p className='key'># of participants</p>
					<p>{data.sessions.length}</p>
				</div>
			</DetailsSection>

			{/* TESTS */}
			<DetailsSection title='Tests'>
				{data.tests.map(item => (
					<TestItem key={item.id} data={item} />
				))}
			</DetailsSection>

			{/* PRE QUESTIONNAIRE */}
			{data.preQuestionnaire.length > 0 && (
				<DetailsSection title='Pre-questionnaire'>
					{data.preQuestionnaire.map(item => (
						<QuestionItem key={item.id} data={item} />
					))}
				</DetailsSection>
			)}

			{/* POST QUESTIONNAIRE */}
			{data.postQuestionnaire.length > 0 && (
				<DetailsSection title='Post-questionnaire'>
					{data.postQuestionnaire.map(item => (
						<QuestionItem key={item.id} data={item} />
					))}
				</DetailsSection>
			)}

			{/* SCREENSHOTS */}
			<DetailsSection title='Screenshots'>{/* GET DEVICES */}</DetailsSection>

			{/* STYLE */}
			<style jsx>{`
				.details {
					display: grid;
					grid-template-columns: max-content auto;
					grid-gap: 15px;
				}
				.key {
					color: var(--lightText);
					font-weight: bold;
				}
			`}</style>
		</Section>
	);
};

export default Details;
