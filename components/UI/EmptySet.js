import React from 'react';
import { HiOutlineDatabase as IcEmpty } from 'react-icons/hi';

const EmptySet = ({ data = null, icon = null, children, showIcon = true, showBorders = true, height = 'auto', margin = '20px' }) => {
	if (data && data.length > 0) return <></>;
	return (
		<div className='EmptySet lightText'>
			{showIcon && <div className='icon'>{icon || <IcEmpty />}</div>}
			<div className='message'>{children}</div>

			{/* STYLE */}
			<style jsx>{`
				.EmptySet {
					height: ${height};
					border: ${showBorders ? ' 3px dashed var(--borderColor)' : 'none'};
					border-radius: 5px;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					gap: 10px;
					padding: 30px;
					margin: ${margin};
				}

				.message {
					text-align: center;
				}

				.icon {
					font-size: 2.5rem;
				}
			`}</style>
		</div>
	);
};

export default EmptySet;
