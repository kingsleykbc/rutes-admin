import React from 'react';

const ListItemStat = ({ icon, children }) => {
	return (
		<div className='Stat'>
			{icon}
			<span>{children}</span>

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
					max-width: 100%;
				}
				span {
					display: block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				@media screen and (max-width: 700px){
					.Stat {
						margin-top: 10px;
					}
					span {
						max-width: 250px;
						flex-grow: 1;
					}
				}
			`}</style>
		</div>
	);
};

export default ListItemStat;
