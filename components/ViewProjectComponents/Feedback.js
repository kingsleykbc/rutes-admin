import { useState } from 'react';
import { sessionFeedbacksFormatter } from '../../graphql/formatters/projects';
import EmptySet from '../UI/EmptySet';
import Section from '../UI/Section';
import TabView from '../UI/TabView';
import FeedbackItem from './FeedbackComponents/FeedbackItem';

/**
 * FEEDBACK
 */
const Feedback = ({ data: { sessions } }) => {
	const [view, setView] = useState('All');
	const data = sessionFeedbacksFormatter(sessions, view);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='Feedback'>
			<div className='topSection'>
				{/* TABS */}
				<TabView tabs={['All', 'Notes', 'Feature requests', 'Error updates']} onChange={setView} />
			</div>

			{/* FEEDBACK ITEMS */}
			<Section>
				{data.length === 0 && (
					<EmptySet>
						No <b>{view}</b> feedback yet
					</EmptySet>
				)}
				{data.map(item => (
					<FeedbackItem key={item.id} data={item} />
				))}
			</Section>

			{/* STYLE */}
			<style jsx>{`
				.topSection {
					background: #3b3b3b;
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
