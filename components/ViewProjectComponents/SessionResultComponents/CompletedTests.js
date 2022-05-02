import React, { useState } from 'react';
import Container from '../../UI/Container';
import EmptySet from '../../UI/EmptySet';
import { AiOutlineCheckCircle as IcCheck } from 'react-icons/ai';
import Button from '../../UI/Button';
import { HighlightedText } from '../../UI/TextComponents';

/**
 * LIST OF COMPLETED TESTS (WITH RECORDINGS)
 */
const CompletedTests = ({
	session: {
		response: { completedTests, recordings }
	}
}) => {
	return (
		<Container margin='25px 0 0 0'>
			<h3>Completed tests</h3>

			<Container padding='15px 0'>
				<EmptySet data={completedTests}>No Completed tests</EmptySet>
				{completedTests.map(route => (
					<Test key={route} recordings={recordings} route={route} />
				))}
			</Container>
		</Container>
	);
};

export default CompletedTests;

/**
 * COMPLETED TEST
 */
const Test = ({ route, recordings }) => {
	// Toggle recording controls
	const [showRecording, setShowRecording] = useState(false);
	const recording = recordings.find(item => item.route === route);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className='whiteboard'>
			<div className='section'>
				<div className='sectionInner'>
					<IcCheck />
					<span>
						<b>{route}</b> test
					</span>
				</div>
				{recording ? (
					<Button onClick={() => setShowRecording(!showRecording)}>{showRecording ? 'Hide Recording' : 'Show Recording'}</Button>
				) : (
					<HighlightedText>No Recording</HighlightedText>
				)}
			</div>

			{showRecording && (
				<Container align='center' hasBorder borderDirections='t' padding='15px 0 0 0' margin='15px 0 0 0'>
					<video controls src={recording.recording}>
						Your browser does not support the video tag.
					</video>
				</Container>
			)}

			{/* STYLE */}
			<style jsx>{`
				video {
					width: 100%;
					max-width: 600px;
					border-radius: 8px;
					box-shadow: var(--boxShadow);
				}

				.section,
				.sectionInner {
					display: flex;
					align-items: center;
					gap: 15px;
				}

				.section {
					justify-content: space-between;
				}
			`}</style>
		</div>
	);
};
