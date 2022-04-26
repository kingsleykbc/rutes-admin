import { useState } from 'react';
import { questionnaireResponseFormatter } from '../../../graphql/formatters/projects';
import TabView from '../../UI/TabView';
import QuestionnaireResponse from '../QuestionnaireResponse/QuestionnaireResponse';

const QuestionnaireResponses = ({ data, sessionID }) => {
	const views = [];
	if (data.preQuestionnaire.length > 0) views.push('Pre-session');
	if (data.postQuestionnaire.length > 0) views.push('Post-session');
	const [view, setView] = useState(views[0]);
	const responseData = questionnaireResponseFormatter(data, view, sessionID);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponses'>
			<div className='titleSection'>
				<h3 className='title'>Questionnaire</h3>
				<TabView tabs={views} onChange={setView} />
			</div>

			<div className='content'>
				{responseData.map((item, index) => (
					<QuestionnaireResponse key={`qr_${index}`} data={item} />
				))}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.titleSection {
					display: flex;
					justify-content: space-between;
				}
			`}</style>
		</div>
	);
};

export default QuestionnaireResponses;
