import React from 'react';

const ClickableIcon = ({
	icon,
	color,
	onClick,
	size,
	iconSize,
	background,
	hasBorder,
	hasShadow,
	borderColor,
	filled,
	highlightBackground
}) => {
	highlightBackground = !(highlightBackground === false);
	const mainColor = color || 'var(--primaryColor)';

	const mainBorderColor = borderColor ? borderColor : filled ? mainColor : 'var(--highlightColor)';
	const border = hasBorder ? `2px solid ${mainBorderColor}` : 'none';
	const iconBackground = filled ? mainColor : background ? background : 'transparent';
	const iconColor = filled ? '#fff' : mainColor;
	size = size || '40px';

	return (
		<div className='ClickableIcon'>
			<div className='iconCover' onClick={onClick}>
				{icon}
			</div>

			{/* STYLE ======================================================================================= */}
			<style jsx>{`
				.iconCover {
					border: ${border};
					border-radius: 5px;
					width: ${size};
					height: ${size};
					align-items: center;
					display: inline-flex;
					color: ${iconColor};
					overflow: hidden;
					justify-content: center;
					cursor: pointer;
					font-size: ${iconSize || '1.5rem'};
					background: ${iconBackground};
					box-shadow: ${hasShadow ? 'var(--boxShadow)' : 'none'};
					transition: background linear 0.3s;
				}

				.iconCover :global(svg *) {
					color: ${iconColor};
				}

				.iconCover:hover {
					background: ${highlightBackground ? '#000' : 'transparent'};
					color: ${highlightBackground ? '#fff' : '#000'};
					border-color: #000;
				}

				.iconCover:hover :global(svg *) {
					color: ${highlightBackground ? '#fff' : '#000'};
				}
			`}</style>
		</div>
	);
};

export default ClickableIcon;
