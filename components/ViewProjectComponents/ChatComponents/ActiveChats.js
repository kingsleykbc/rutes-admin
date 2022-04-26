import ActiveChat from './ActiveChatsComponents/ActiveChat';

const ActiveChats = ({ sessions, selectedSessionID, onSelectChat }) => {
	// ===================================================================================================================
	//  UI
	// ===================================================================================================================

	return (
		<div className='ActiveChats'>
			<h3>Sessions</h3>
			<div className='sessions'>
				{sessions.map(item => (
					<ActiveChat
						key={item.id + '_sessionChat'}
						selected={item.id === selectedSessionID}
						data={item}
						onSelectChat={() => onSelectChat(item.id)}
					/>
				))}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.ActiveChats {
					background: #fff;
					flex-shrink: 0;
					overflow: auto;
					width: 50%;
					max-width: 300px;
				}

				h3 {
					padding: 15px 20px;
				}
			`}</style>
		</div>
	);
};

export default ActiveChats;
