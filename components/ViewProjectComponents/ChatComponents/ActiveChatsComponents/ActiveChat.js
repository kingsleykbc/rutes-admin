import React, { useState, useEffect } from 'react';
import { BiMessageDetail as IcMessage } from 'react-icons/bi';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

const ActiveChat = ({ data, selected, onSelectChat }) => {
	const [lastMessage, setLastMessage] = useState('loading...');

	/**
	 * GET THE LAST MESSAGE
	 */
	useEffect(() => {
		const getLastMessage = async () => {
			const lastMessage = await getDoc(doc(db, 'rutes-message', data.lastMessage));
			setLastMessage(lastMessage.data().message);
		};

		if (data.lastMessage) getLastMessage();
		else setLastMessage('No messages');
	}, [data.lastMessage]);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<div onClick={onSelectChat} className={`ActiveChat ${selected && 'selected'}`}>
			<div className='content'>
				<div className='icon'>
					<IcMessage size='1.5rem' color='var(--lightText)' />
				</div>
				<div className='details'>
					<h4>{data.testerEmail}</h4>
					<span>{data.testerTyping ? <i>Typing...</i> : lastMessage || ''}</span>
					<span>{data.lastUpdated.toDate().toLocaleString()}</span>
				</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				.content {
					padding: 12px;
					display: flex;
					width: 100%;
					cursor: pointer;
					gap: 12px;
				}

				.ActiveChat {
					border-top: var(--border);
					position: relative;
					transition: background linear 0.15s;
				}

				.ActiveChat:hover {
					background: var(--highlightColor);
				}

				.ActiveChat.selected:before {
					content: '';
					position: absolute;
					border: 15px solid transparent;
					border-right-color: var(--faintColor);
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}

				.icon {
					margin-top: 5px;
				}

				.details {
					flex-grow: 1;
					overflow: hidden;
				}

				span {
					display: block;
					width: calc(100% - 50px);
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					color: var(--lightText);
					font-size: 0.95rem;
					margin-top: 8px;
				}

				span:last-child {
					font-size: 0.8rem;
				}
			`}</style>
		</div>
	);
};

export default ActiveChat;
