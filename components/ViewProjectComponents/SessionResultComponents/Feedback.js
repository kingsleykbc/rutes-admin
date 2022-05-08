import { useState } from 'react';
import RouteAnnotations from '../AnnotationsComponents/RouteAnnotations';
import { annotations as annotationsResult, feedback } from '../../../dummybase';
import TabView from '../../UI/TabView';
import FeedbackItem from '../FeedbackComponents/FeedbackItem';
import { sessionFeedbacksFormatter } from '../../../graphql/formatters/projects';
import EmptySet from '../../UI/EmptySet';

const Feedback = ({ session }) => {
	const [view, setView] = useState('All');
	const data = sessionFeedbacksFormatter(session ? [session] : [], view);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='subSection'>
			<div className='titleSection'>
				<h3 className='title'>Feedback</h3>
				<TabView tabs={['All', 'Notes', 'Feature requests', 'Error updates']} onChange={setView} />
			</div>

			<div className='content'>
				{data.length === 0 && (
					<EmptySet>
						This user has not left any <b>{view}</b> feedback yet
					</EmptySet>
				)}

				{data.map(item => (
					<FeedbackItem key={item.id} data={item} />
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

export default Feedback;
