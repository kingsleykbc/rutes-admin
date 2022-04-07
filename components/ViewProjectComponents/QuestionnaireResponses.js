import { useState } from 'react';
import { response } from '../../dummybase';
import Section from '../UI/Section';
import TabView from '../UI/TabView';
import QuestionnaireResponse from './QuestionnaireResponse/QuestionnaireResponse';

const QuestionnaireResponses = () => {
	const [view, setView] = useState('Pre-session');

	const responseData = view === 'Pre-session' ? response.preQuestionnaire : response.postQuestionnaire;

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponses'>
			<div className='topSection'>
				<TabView tabs={['Pre-session', 'Post-session']} onChange={setView} />
			</div>

			<Section>
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
