import { useState } from 'react';
import { feedback as feedbackResult } from '../../dummybase';
import Section from '../UI/Section';
import TabView from '../UI/TabView';
import FeedbackItem from './FeedbackComponents/FeedbackItem';

const Feedback = () => {
	const [resultRouteIndex, setResultRouteIndex] = useState(0);
	const [view, setView] = useState('Notes');

	const data = feedbackResult[resultRouteIndex].feedback.filter(item => {
		if (view === 'Notes') return item.type === 'note';
		if (view === 'Error updates') return item.type === 'error';
		if (view === 'Feature requests') return item.type === 'feature request';
		return true;
	});

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='Feedback'>
			<div className='topSection'>
				{/* ROUTE SELECTION */}
				<select name='route' id=''>
					<option>Route</option>
					{/* DYNAMICALLY PUT OPTIONS HERE */}
				</select>

				{/* TABS */}
				<TabView tabs={['All', 'Notes', 'Feature requests', 'Error updates']} onChange={setView} />
			</div>

			{/* FEEDBACK ITEMS */}
			<Section>
				{data.map(item => (
					<FeedbackItem key={item.id} data={item} />
				))}
			</Section>

			{/* STYLE */}
			<style jsx>{`
				.topSection {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #3b3b3b;
					padding: 0px 20px;
					color: #fff;
				}

				select {
					color: #fff;
					font-weight: bold;
				}
			`}</style>
		</div>
	);
};

export default Feedback;
