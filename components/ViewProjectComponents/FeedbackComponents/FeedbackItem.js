import React from 'react';
import { BiNote as IcNote } from 'react-icons/bi';
import { BiMessageAltError as IcError } from 'react-icons/bi';
import { VscRequestChanges as IcFeatureRequest } from 'react-icons/vsc';

const FeedbackItem = ({ data }) => {
	console.log(new Date(data.createdAt));
	return (
		<div className='FeedbackItem whiteboard'>
			<div className='icon'>{data.type === 'note' ? <IcNote /> : data.type === 'feature request' ? <IcFeatureRequest /> : <IcError />}</div>
			<div className='details'>
				<h3>{data.title}</h3>
				<p>{data.message}</p>
				<b className='lightText'>
					{data.testerEmail} - {new Date(data.createdAt).toLocaleString()}
				</b>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.FeedbackItem {
					display: flex;
					gap: 20px;
					margin-bottom: 15px;
				}

				.icon {
					font-size: 2.5rem;
				}

				.icon :global(svg) {
					fill: var(--primaryColor);
				}

				h3 {
					font-size: 1.05rem;
				}

				.details {
					flex-grow: 1;
				}

				p {
					margin: 10px 0;
				}

				b {
					font-size: 0.93rem;
					display: block;
					text-align: right;
				}
			`}</style>
		</div>
	);
};

export default FeedbackItem;

// {
//   "id": "1923",
//   "type": "note",
//   "message": "The button is red",
//   "route": "/",
//   "testerName": "Frank",
//   "timePosted": "2022-04-01T20:52:06.197Z"
// }
