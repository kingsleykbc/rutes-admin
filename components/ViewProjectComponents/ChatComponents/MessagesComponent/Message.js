import React from 'react';

const Message = ({ data: { createdAt, sender, message } }) => {
	const fromSelf = sender === 'Admin';
	return (
		<div className={`Message ${fromSelf && 'fromSelf'}`}>
			<div className='content'>
				{!fromSelf && <h4>{sender}</h4>}
				<p>{message}</p>
				<span>{createdAt.toDate().toLocaleString()}</span>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Message {
					padding: 8px 20px;
				}

				.content {
					display: inline-block;
					background-color: #fff;
					box-shadow: var(--boxShadow);
					font-size: 0.92rem;
					text-align: left;
					border-top-left-radius: 7px;
					border-top-right-radius: 7px;
					border-bottom-right-radius: 7px;
					padding: 10px 15px;
					max-width: 500px;
				}

				.content h4 {
					font-size: 0.85rem;
					margin-bottom: 8px;
				}

				.content span {
					font-size: 0.8rem;
					color: var(--lightText);
					display: block;
					text-align: right;
				}

				.content p {
					margin-bottom: 8px;
				}

				.Message.fromSelf {
					text-align: right;
				}

				.fromSelf .content {
					background-color: var(--primaryColor);
					color: #fff;
					border-bottom-right-radius: 0;
					border-bottom-left-radius: 7px;
				}

				.fromSelf .content span {
					color: rgba(255, 255, 255, 0.595);
				}
			`}</style>
		</div>
	);
};

export default Message;
