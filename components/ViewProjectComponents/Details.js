import React from 'react';
import QuestionItem from '../AddProjectComponents/QuestionnaireInputComponents/QuestionItem';
import TestItem from '../AddProjectComponents/TestInputComponents/TestItem';
import Button from '../UI/Button';
import Section from '../UI/Section';
import DetailsSection from './DetailsComponents/DetailsSection';
import TopSection from './DetailsComponents/TopSection';
import Container from '../UI/Container';
import EmptySet from '../UI/EmptySet';
import { CopyableText } from '../UI/TextComponents';
import MultiTextInput from '../UI/MultiTextInput';

/**
 * PROJECT DETAILS AND IMPORT CODE
 */
const Details = ({ data }) => (
	<Section>
		{/* TOP SECTION */}
		<TopSection data={data} />

		{/* INSTALLATION */}
		<DetailsSection title='Installation'>
			<p>
				Download the tester library from{' '}
				<a download='bundle.min.js' href='../../docs/bundle.min.js'>
					<Button type='text'> here</Button>
				</a>{' '}
				and copy the following snippet into site-under-test.
				<br />
				<br />
				<b>IMPORTANT: </b> Include the code at after the body tag, not inside.
			</p>
			<div>
				<pre>
					<code className='code'>{`
<!-- RUTES TESTER LIBRARY IMPORT -->
<div id="root"></div>						
<script>	
	// Optional (only if you don't add the data-projectKey attribute)
	window.rutes_project_key = '${data.projectKey}'; 
</script>
<script data-projectKey='${data.projectKey}' src='`}<i className="codePlaceholder">{"path to bundle.min.js"}</i>{`'></script>
						`}</code>
				</pre>
			</div>
		</DetailsSection>

		{/* DESCRIPTION */}
		<DetailsSection title='Description'>
			<p>{data.description}</p>
		</DetailsSection>

		{/* DETAILS */}
		<DetailsSection title='Details'>
			<div className='details'>
				<p className='key'>Project Key</p>
				<CopyableText>{data.projectKey}</CopyableText>

				<p className='key'>URL</p>
				<p>{data.url}</p>

				<p className='key'># of participants</p>
				<p>{data.sessions.length}</p>
			</div>
		</DetailsSection>

		{/* TESTS */}
		<DetailsSection title='Tests'>
			{data.tests.map(item => (
				<TestItem key={item.id} data={item} />
			))}
		</DetailsSection>

		{/* PRE QUESTIONNAIRE */}
		{data.preQuestionnaire.length > 0 && (
			<DetailsSection title='Pre-questionnaire'>
				{data.preQuestionnaire.map(item => (
					<QuestionItem key={item.id + 'pre-q'} data={item} />
				))}
			</DetailsSection>
		)}

		{/* POST QUESTIONNAIRE */}
		{data.postQuestionnaire.length > 0 && (
			<DetailsSection title='Post-questionnaire'>
				{data.postQuestionnaire.map(item => (
					<QuestionItem key={item.id + 'post-q'} data={item} />
				))}
			</DetailsSection>
		)}

		{/* APPROVED TESTERS */}
		<DetailsSection title='Approved testers'>
			<MultiTextInput value={data.approvedTesters} disabled />
		</DetailsSection>

		{/* SCREENSHOTS */}
		<DetailsSection title='Screenshots'>
			{data.screenshots.length === 0 && <EmptySet margin='20px 0'>No Screenshots yet</EmptySet>}
			{data.screenshots.map(item => (
				<div className='screenshot whiteboard' key={item.id}>
					<div className='screenshotImage'>
						<img src={item.screenshot} layout='fill' alt='screenshot' />
					</div>
					<span>
						{item.device} - <b>{item.route}</b>
					</span>
				</div>
			))}
		</DetailsSection>

		<Container padding='20px' />

		{/* STYLE */}
		<style jsx>{`
			.details {
				display: grid;
				grid-template-columns: max-content auto;
				grid-gap: 15px;
				align-items: center;
			}
			.key {
				color: var(--lightText);
				font-weight: bold;
			}

			pre {
				overflow: auto;
				border-radius: 5px;
				background: var(--faintColor);
				font-size: 15px;
				padding: 0px 20px;
				margin-top: 25px;
				tab-size: 4;
			}
			.code {
				line-height: 27px;
				padding: 0 10px;
				white-space: pre;
				opacity: 0.8;
				font-family: monospace;
			}

			.screenshot {
				padding: 0;
				overflow: hidden;
				margin-top: 20px;
			}

			.screenshotImage {
				text-align: center;
				background: var(--faintColor);
			}
			.screenshot img {
				max-width: 100%;
				max-height: 400px;
			}

			.screenshot span {
				display: block;
				text-align: center;
				padding: 15px 25px;
			}

			.codePlaceholder {
				border: 1px dashed var(--primaryColor);
				display: inline-block;
				padding: 0 5px;
				color: var(--primaryColor);
			}
		`}</style>
	</Section>
);

export default Details;
