import { useState } from 'react';
import RouteAnnotations from '../AnnotationsComponents/RouteAnnotations';
import { annotations as annotationsResult, feedback } from '../../../dummybase';
import TabView from '../../UI/TabView';
import FeedbackItem from '../FeedbackComponents/FeedbackItem';

const Feedback = () => {
	const [view, setView] = useState('All');

	const data = feedback[0].feedback.filter(item => {
		if (view === 'Notes') return item.type === 'note';
		if (view === 'Error updates') return item.type === 'error';
		if (view === 'Feature requests') return item.type === 'feature request';
		return true;
	});

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
