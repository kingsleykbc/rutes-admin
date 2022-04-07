import React from 'react';

/**
 * CONTAINER
 *
 * A reusable Box component for defining margin, padding, border directions, etc.
 */

const Container = ({
	className = '',
	margin = '0',
	padding = '0',
	responsiveMargin = '0',
	responsivePadding = '0',
	align = 'left',
	responsiveAlign = 'left',
	responsiveWidth = '800px',
	borderRadius = '0',
	borderWidth = '1px',
	borderDirections = '',
	borderColor = 'var(--borderColor)',
	mobileBorderDirections = '',
	hasBorder = false,
	hasShadow = false,
	children
}) => {
	/**
	 * SET BORDERS
	 */
	let borders = '';
	let mobileBorders = '';
	borderDirections = borderDirections || 'all';
	mobileBorderDirections = mobileBorderDirections || borderDirections;

	const getBorders = bDirections => {
		const borderValue = `${borderWidth} solid ${borderColor}`;
		const allBorders = bDirections === 'all';
		let mainBorders = '';

		if (allBorders || bDirections.includes('l')) mainBorders += `border-left: ${borderValue};`;
		if (allBorders || bDirections.includes('r')) mainBorders += `border-right: ${borderValue};`;
		if (allBorders || bDirections.includes('b')) mainBorders += `border-bottom: ${borderValue};`;
		if (allBorders || bDirections.includes('t')) mainBorders += `border-top: ${borderValue};`;

		return mainBorders;
	};

	if (hasBorder) {
		borders = getBorders(borderDirections);
		mobileBorders = mobileBorderDirections === borderDirections ? borders : getBorders(mobileBorderDirections);
	}

	return (
		<div className={`Container ${className}`}>
			{children}
			
			{/* STYLE */}
			<style jsx>{`
				.Container {
					margin: ${margin};
					padding: ${padding};
					text-align: ${align};
					border-radius: ${borderRadius};
					box-shadow: ${hasShadow ? 'var(--boxShadow)' : 'none'};
					${borders};
				}

				@media screen and (max-width: ${responsiveWidth}) {
					.Container {
						margin: ${responsiveMargin};
						padding: ${responsivePadding};
						text-align: ${responsiveAlign};
						border-top: none;
						border-left: none;
						border-bottom: none;
						border-right: none;
						${mobileBorders}
					}
				}
			`}</style>
		</div>
	);
};

export default Container;
