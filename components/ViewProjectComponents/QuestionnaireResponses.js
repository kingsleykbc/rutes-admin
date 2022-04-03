import { useState } from 'react';
import TabView from '../UI/TabView';

const QuestionnaireResponses = () => {
	const [view, setView] = useState('Notes');

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='QuestionnaireResponses'>
			<div className='topSection'>
				<TabView tabs={['Pre-session', 'Post-session']} onChange={setView} />
			</div>

			

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
