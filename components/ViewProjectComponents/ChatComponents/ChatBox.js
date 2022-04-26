import { BiSend as IcSend } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { db } from '../../../lib/firebase';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';

const ChatBox = ({ sessionID }) => {
	const [message, setMessage] = useState('');
	const [isTyping, setIsTyping] = useState(false);

	/**
	 * LISTEN FOR WHETHER USER IS TYPING AND UPDATE DOC
	 */
	useEffect(() => {
		// Update typing status in firestore (so admin can know when tester is typing)
		if (sessionID) {
			const docRef = doc(db, 'rutes-session', sessionID);
			if (message) {
				if (!isTyping) {
					updateDoc(docRef, { adminTyping: true });
					setIsTyping(true);
				}
			} else {
				updateDoc(docRef, { adminTyping: false });
				setIsTyping(false);
			}
		}
	}, [message, sessionID]);

	/**
	 * SEND THE MESSAGE
	 */
	const sendMessage = async e => {
		e.preventDefault();

		// Send message and update session
		const newMessage = await addDoc(collection(db, 'rutes-message'), {
			createdAt: new Date(),
			message,
			sender: 'Admin',
			sessionID
		});
		updateDoc(doc(db, 'rutes-session', sessionID), { lastUpdated: new Date(), lastMessage: newMessage.id });

		// Reset form
		setMessage('');
	};

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	return (
		<form onSubmit={sendMessage} className='ChatBox'>
			<input type='text' value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter message...' required />
			<button>
				<IcSend size='1.5rem' />
			</button>

			{/* STYLE */}
			<style jsx>{`
				.ChatBox {
					background: #fff;
					box-shadow: 0 2px 10px rgba(35, 23, 62, 0.1);
					display: flex;
					padding: 10px;
				}

				input {
					flex-grow: 1;
					border: none;
					outline: none;
				}

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 50px;
					height: 50px;
					border: none;
					padding: 0;
					border-radius: 5px;
					background: var(--highlightColor);
					color: var(--primaryColor);
					cursor: pointer;
					transition: all linear 0.12s;
				}

				button:hover {
					background: var(--primaryColor);
					color: #fff;
				}
			`}</style>
		</form>
	);
};

export default ChatBox;
