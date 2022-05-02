import React from 'react';

const PageDivider = ({ label, children, edgeSpacing, labelPosition, vPadding, borderWidth, borderColor }) => {
	/**
	 * GET CSS
	 */
	edgeSpacing = edgeSpacing || '20px';
	label = label || children;

	const left = labelPosition === 'center' ? 'calc(50% - 20px)' : labelPosition === 'right' ? 'auto' : edgeSpacing;
	const right = labelPosition === 'right' ? edgeSpacing : 'auto';

	// =======================================================================
	//  UI
	// =======================================================================
	return (
		<div className='PageDivider'>
			{label && <h4 className='label'>{label}</h4>}
			<hr />

			{/* STYLE */}
			<style jsx>{`
				.PageDivider {
					position: relative;
          padding: 10px;
				}

				.label {
					position: absolute;
					top: calc(50% - 10px);
					display: inline-block;
					padding: 0 10px;
					background: #fff;
					left: ${left};
					right: ${right};
					color: var(--lightText);
				}

				.PageDivider :global(hr) {
					border-width: ${borderWidth || '1px'};
					${borderColor || `border-color: ${borderColor};`}
				}
			`}</style>
		</div>
	);
};

export default PageDivider;
