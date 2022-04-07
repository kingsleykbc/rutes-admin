import React from 'react';

const ListItemStat = ({ icon, children }) => {
	return (
		<div className='Stat'>
			{icon}
			{children}

			{/* STYLE */}
			<style jsx>{`
				.Stat {
					display: inline-flex;
					margin-right: 12px;
					gap: 10px;
					font-size: 0.95rem;
					align-items: center;
					background: var(--highlightColor);
					border-radius: 50px;
					padding: 4px 15px;
				}
			`}</style>
		</div>
	);
};

export default ListItemStat;
