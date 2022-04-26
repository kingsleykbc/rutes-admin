import React from 'react';

/**
 * SECTION WRAPPER WITH MAX WIDTH, TITLE, AND PADDING
 */
const Section = ({
	title,
	sideContent,
	padding = '20px',
	maxWidth = '800px',
	responsivePadding = '15px',
	responsiveWidth = '800px',
	children
}) => {
	return (
		<section className='Section'>
			{/* TOP SECTION */}
			{(title || sideContent) && (
				<div className='topContent'>
					{title && <h2>{title}</h2>}
					{sideContent && <div className='sideContent'>{sideContent}</div>}
				</div>
			)}

			{/* CONTENT */}
			<div>{children}</div>

			<style jsx>{`
				section {
					max-width: ${maxWidth};
					margin: auto;
					padding: ${padding};
				}

				.topContent {
					padding: 20px 0;
					margin-bottom: 20px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: var(--border);
				}

				@media screen and (max-width: ${responsiveWidth}) {
					section {
						padding: ${responsivePadding};
					}
				}
			`}</style>
		</section>
	);
};

export default Section;
