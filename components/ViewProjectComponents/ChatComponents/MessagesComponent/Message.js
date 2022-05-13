import React, { useState } from 'react';
import { MdDeleteOutline as IcDelete } from 'react-icons/md';
import { db } from '../../../../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Message = ({ data: { id, createdAt, sender, message } }) => {
	const fromSelf = sender === 'Admin';
	const isDeleted = message === '<--unsent-->';
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * DELETE MESSAGE
	 */
	const deleteMessage = async () => {
		setIsLoading(true);
		try {
			await updateDoc(doc(db, 'rutes-message', id), { message: '<--unsent-->' });
			setIsLoading(false);
		} catch (e) {}
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div className={`Message ${fromSelf && 'fromSelf'}`}>
			{isLoading || isDeleted ? (
				<div className='rutes-message-deletedMessage'>
					<i>{isLoading ? 'Deleting...' : 'Message deleted'}</i>
				</div>
			) : (
				<>
					{fromSelf && !(isLoading || isDeleted) && (
						<div className='delIcon' onClick={deleteMessage}>
							<IcDelete />
						</div>
					)}
					<div className='content'>
						{!fromSelf && <h4>{sender}</h4>}
						<p>{message}</p>
						<span>{createdAt.toDate().toLocaleString()}</span>
					</div>
				</>
			)}

			{/* STYLE */}
			<style jsx>{`
				.Message {
					padding: 8px 20px;
					display: flex;
					gap: 10px;
					align-items: center;
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

				.fromSelf {
					justify-content: right;
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

				.rutes-message-deletedMessage {
					border: 2px dashed #a9a9a9;
					padding: 8px 10px;
					color: var(--lightText);
					border-radius: 5px;
				}

				.delIcon {
					width: 37px;
					height: 37px;
					border-radius: 50%;
					border: 1px solid rgba(0, 0, 0, 0.2);
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					font-size: 1.2rem;
				}

				.delIcon:hover {
					background: rgba(0, 0, 0, 0.2);
					border-color: transparent;
				}
			`}</style>
		</div>
	);
};

export default Message;
