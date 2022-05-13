import { useEffect, useState } from 'react';
import { BiMessageDetail as IcMessage } from 'react-icons/bi';
import useWindowSize from '../../hooks/useWindowSize';
import ActiveChats from './ChatComponents/ActiveChats';
import ChatBox from './ChatComponents/ChatBox';
import Messages from './ChatComponents/Messages';
import { collection, orderBy, where, query, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { BlankPage } from '../UI/LoadablePage';

/**
 * CHAT SESSION
 */
const Chat = ({ data: { projectKey } }) => {
	const [sessions, setSessions] = useState(null);
	const [selectedSessionID, setSelectedSessionID] = useState(null);
	const { height } = useWindowSize();

	// Get messages
	useEffect(() => {
		const collectionRef = collection(db, 'rutes-session');
		const q = query(collectionRef, where('projectKey', '==', projectKey), orderBy('lastUpdated', 'desc'));
		const unsubscribe = onSnapshot(q, snapshot => {
			const newSessions = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
			setSessions(newSessions);

			// Set the default selected message
			if (selectedSessionID === null) setSelectedSessionID(newSessions[0]?.id || null);
		});
		return unsubscribe;
	}, []);

	const selectedSession = sessions?.find(item => item.id === selectedSessionID);

	// ===================================================================================================================
	//  UI
	// ===================================================================================================================
	if (!sessions) return <BlankPage type='loading' message='Fetching chat' />;
	if (sessions.length === 0)
		return (
			<BlankPage icon={<IcMessage size={50} color='var(--lightText)' />} message='No messages' subMessage='No sessions have been started' />
		);
	if (!selectedSessionID) return <BlankPage type='loading' message='Fetching selected session' />;

	return (
		<div className='Chat'>
			<ActiveChats sessions={sessions} selectedSessionID={selectedSessionID} onSelectChat={setSelectedSessionID} />
			<div className='chatRoom'>
				<Messages selectedSession={selectedSession} />
				<ChatBox sessionID={selectedSessionID} />
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Chat {
					display: flex;
					height: calc(${height + ' - '} 57px);
					min-width: 400px;
					overflow-x: auto;
				}
				.chatRoom {
					flex-grow: 1;
					background: var(--faintColor);
					display: flex;
					flex-direction: column;
				}
			`}</style>
		</div>
	);
};

export default Chat;
