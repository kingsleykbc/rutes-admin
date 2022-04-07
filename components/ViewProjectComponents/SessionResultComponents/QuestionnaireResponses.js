import { useState } from 'react';
import { response } from '../../../dummybase';
import TabView from '../../UI/TabView';
import QuestionnaireResponse from '../QuestionnaireResponse/QuestionnaireResponse';

const QuestionnaireResponses = () => {
	const [view, setView] = useState('Pre-session');

	const responseData = view === 'Pre-session' ? response.preQuestionnaire : response.postQuestionnaire;

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponses'>
			<div className='titleSection'>
				<h3 className='title'>Questionnaire</h3>
				<TabView tabs={['Pre-session', 'Post-session']} onChange={setView} />
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
