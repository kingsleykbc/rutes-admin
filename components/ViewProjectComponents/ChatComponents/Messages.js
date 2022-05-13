import { db } from '../../../lib/firebase';
import { collection, orderBy, where, query, onSnapshot } from 'firebase/firestore';
import { useRef, useEffect, useState } from 'react';
import EmptySet from '../../UI/EmptySet';
import Message from './MessagesComponent/Message';
import { HighlightedText } from '../../UI/TextComponents';

const Messages = ({ selectedSession: { id: sessionID, testerTyping, testerEmail } }) => {
	const messagesWrapperRef = useRef(null);
	const [mounted, setMounted] = useState(false);
	const [messages, setMessages] = useState(null);

	// Get messages
	useEffect(() => {
		const collectionRef = collection(db, 'rutes-message');
		const q = query(collectionRef, where('sessionID', '==', sessionID), orderBy('createdAt'));

		// Subscribe query (for real-time update)
		const unsubscribe = onSnapshot(q, snapshot => {
			setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		});
		return unsubscribe;
	}, [sessionID]);

	// Scroll to bottom when new message is added
	useEffect(() => {
		if (messagesWrapperRef.current && messages) {
			messagesWrapperRef.current.scrollTo({ top: messagesWrapperRef.current.scrollHeight, behavior: mounted ? 'smooth' : 'auto' });
			setMounted(true);
		}
	}, [messages]);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================

	return (
		<div className='Messages'>
			{testerTyping && <i>{testerEmail} is typing...</i>}

			<div className='messageContent' ref={messagesWrapperRef}>
				{!messages ? (
					<EmptySet showIcon={false}>Loading...</EmptySet>
				) : messages.length === 0 ? (
					<EmptySet>No messages</EmptySet>
				) : (
					messages.map(message => <Message key={message.id} data={message} />)
				)}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Messages {
					flex-grow: 1;
					overflow: hidden;
					position: relative;
				}

				.messageContent {
					height: 100%;
					padding: 12px 0;
					overflow-x: auto;
					position: relative;
					overflow-y: overlay;
				}

				/* OVERWRITE SCROLL BAR HERE */
				.messageContent::-webkit-scrollbar {
					width: 6px;
				}

				.messageContent::-webkit-scrollbar-track {
					border-radius: 10px;
				}

				.messageContent::-webkit-scrollbar-thumb {
					background: rgba(0, 0, 0, 0.118);
					border-radius: 10px;
				}

				i {
					position: absolute;
					top: 20px;
					left: 50%;
					transform: translateX(-50%);
					display: block;
					padding: 8px 15px;
					text-align: center;
					font-size: 0.95rem;
					color: #fff;
					background: rgba(32, 24, 55, 0.404);
					border-radius: 5px;
					z-index: 2000;
				}
			`}</style>
		</div>
	);
};

export default Messages;
