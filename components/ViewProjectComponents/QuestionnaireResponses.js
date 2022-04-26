import { useState } from 'react';
import { questionnaireResponseFormatter } from '../../graphql/formatters/projects';
import EmptySet from '../UI/EmptySet';
import Section from '../UI/Section';
import TabView from '../UI/TabView';
import QuestionnaireResponse from './QuestionnaireResponse/QuestionnaireResponse';

const QuestionnaireResponses = ({ data }) => {
	const views = [];
	if (data.preQuestionnaire.length > 0) views.push('Pre-session');
	if (data.postQuestionnaire.length > 0) views.push('Post-session');
	const [view, setView] = useState(views[0]);
	const responseData = questionnaireResponseFormatter(data, view);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponses'>
			<div className='topSection'>
				<TabView tabs={views} onChange={setView} />
			</div>

			<Section>
				{responseData.length === 0 && <EmptySet>No Response</EmptySet>}
				{responseData.map((item, index) => (
					<QuestionnaireResponse key={`qr_${index}`} data={item} />
				))}
			</Section>

			{/* STYLE */}
			<style jsx>{`
				.topSection {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #3b3b3b;
					color: #fff;
				}

				.QuestionnaireResponses :global(.TabView) {
					width: 100%;
				}
			`}</style>
		</div>
	);
};

export default QuestionnaireResponses;
