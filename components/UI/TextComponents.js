import React from 'react';
import { RiFileCopyLine as IcCopy } from 'react-icons/ri';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from './Button';
import Link from 'next/link';
import classnames from 'classnames';

// =======================================================================
//  TEXT
// =======================================================================
export const Text = ({
	children,
	wrap,
	color,
	fontStyle,
	fontSize,
	fontWeight,
	fontFamily,
	lineHeight,
	alignment,
	isLightText,
	isSmallText,
	isBold,
	responsiveWidth = '800px',
	responsiveFontWeight,
	responsiveFontSize,
	decoration
}) => {
	color = color ? color : isLightText ? 'var(--lightTextColor)' : 'inherit';
	fontWeight = fontWeight ? fontWeight : isBold ? 'bold' : 'normal';
	fontSize = fontSize ? fontSize : isSmallText ? '0.9rem' : '1rem';
	responsiveFontWeight = responsiveFontWeight || fontWeight;
	responsiveFontSize = responsiveFontSize || fontSize;
	decoration = decoration || 'none';

	// =======================================================================
	//  UI
	// =======================================================================
	return (
		<span className='Text'>
			{children}

			{/* STYLE */}
			<style jsx>{`
				.Text {
					color: ${color};
					font-size: ${fontSize};
					word-wrap: ${wrap ? 'break-word' : 'normal'};
					word-break: ${wrap ? 'break-all' : 'normal'};
					font-style: ${fontStyle || 'normal'};
					font-weight: ${fontWeight};
					font-family: ${fontFamily || "'Rubik', Arial, Helvetica, sans-serif"};
					line-height: ${lineHeight || '25px'};
					text-align: ${alignment || 'inherit'};
					text-decoration: ${decoration};
				}

				.Text :global(span) {
					color: ${color} !important;
				}

				@media screen and (max-width: ${responsiveWidth}) {
					.Text {
						font-weight: ${responsiveFontWeight};
						font-size: ${responsiveFontSize};
					}
				}
			`}</style>
		</span>
	);
};

// =======================================================================
//  PARAGRAPHS
// =======================================================================
export const Par = ({
	children,
	wrap,
	slicedAt,
	color,
	fontStyle,
	fontWeight,
	fontSize,
	lineHeight,
	preWrap,
	alignment,
	isLightText,
	isBold,
	isSmallText
}) => {
	// const text = (slicedAt) ? slicer(children, slicedAt) : children;
	const whiteSpace = preWrap ? 'pre-wrap' : 'normal';

	color = color ? color : isLightText ? 'var(--lightTextColor)' : 'inherit';
	fontWeight = fontWeight ? fontWeight : isBold ? 'bold' : 'normal';
	fontSize = fontSize ? fontSize : isSmallText ? '0.9rem' : '1rem';

	// =======================================================================
	//  UI
	// =======================================================================
	return (
		<p className='Par'>
			{text}

			{/* STYLE  */}
			<style jsx>{`
				.Par {
					color: ${color};
					font-size: ${fontSize || '1rem'};
					line-height: ${lineHeight || '25px'};
					word-wrap: ${wrap ? 'break-word' : 'normal'};
					word-break: ${wrap ? 'break-all' : 'normal'};
					font-style: ${fontStyle || 'normal'};
					font-weight: ${fontWeight};
					text-align: ${alignment || 'inherit'};
					white-space: ${whiteSpace};
				}
			`}</style>
		</p>
	);
};

// =======================================================================
//  TEXT WITH ICON
// =======================================================================
export const IconText = ({
	children,
	padding,
	display,
	margin,
	align,
	icon,
	iconColor,
	iconSize,
	iconBack,
	iconPadding,
	iconBackColor,
	iconBackSize,
	...textProps
}) => {
	display = display === 'block' ? 'flex' : 'inline-flex';
	margin = margin || '0';
	iconPadding = iconPadding || '12px';

	// =======================================================================
	//  UI
	// =======================================================================
	return (
		<div className='IconText'>
			{icon && <div className='icon'>{icon}</div>}
			<div className='container'>
				<Text {...textProps}>{children}</Text>
			</div>
			{iconBack && <div className='iconBack'>{iconBack}</div>}

			{/* STYLE */}
			<style jsx>{`
				.IconText {
					display: ${display};
					align-items: ${align || 'center'};
					padding: ${padding || '10px'};
					margin: ${margin};
				}

				.icon {
					${align === 'flex-start' && 'margin-top: 5px;'}
				}

				.icon :global(svg) {
					font-size: ${iconSize || '1.5rem'};
					vertical-align: middle;
					margin-top: -2px;
				}

				.iconBack :global(svg) {
					font-size: ${iconBackSize || '1.5rem'};
					vertical-align: middle;
				}

				.icon :global(svg *) {
					color: ${iconColor || 'var(--primaryColor)'} !important;
				}

				.iconBack :global(svg *) {
					color: ${iconBackColor || 'var(--primaryColor)'} !important;
				}

				.container {
					margin-left: ${icon ? iconPadding : '0'};
					margin-right: ${iconBack ? iconPadding : '0'};
				}
			`}</style>
		</div>
	);
};

// =======================================================================
//  HIGHLIAGHTED TEXT
// =======================================================================
export const HighlightedText = ({
	responsiveWidth,
	mobileWidth,
	responsivePadding,
	responsiveMargin,
	children,
	width,
	display,
	fillWidth,
	type,
	padding,
	margin,
	hideOverflow,
	...textProps
}) => {
	/**
	 * CSS STYLES
	 */
	padding = padding || '8px 20px';
	width = width ? width : fillWidth ? '100%' : 'auto';
	margin = margin || '0';
	display = display || 'inline-block';
	mobileWidth = mobileWidth || width;
	responsiveWidth = responsiveWidth || '800px';
	responsiveMargin = responsiveMargin || margin;
	responsivePadding = responsivePadding || padding;

	/**
	 * WRAP STYLE
	 */
	const wrapStyle =
		hideOverflow === false
			? ``
			: `
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `;

	// =======================================================================
	//  UI
	// =======================================================================
	return (
		<div className={classnames(['HighlightedText', { isDanger: type === 'danger' }])}>
			<Text wrap={false} isBold {...textProps}>
				{children}
			</Text>

			{/* STYLE */}
			<style jsx>{`
				.HighlightedText {
					padding: ${padding};
					margin: ${margin};
					display: ${display};
					width: ${width};
					text-align: center;
					border-radius: 5px;
					background: #ececec;
					color: var(--lightText);
					${wrapStyle};
				}

				.isDanger {
					color: var(--dangerColor);
					background: var(--dangerHighlightColor);
				}

				@media screen and (max-width: ${responsiveWidth}) {
					.HighlightedText {
						padding: ${responsivePadding};
						margin: ${responsiveMargin};
						width: ${mobileWidth};
					}
				}
			`}</style>
		</div>
	);
};

// ================================================================================================
//  CODYABLE TEXT
// ================================================================================================
export const CopyableText = ({ margin, isInline, display, children, ...hightedTextProps }) => {
	margin = margin || '0';
	display = display ? display : isInline ? 'inline-block' : 'block';

	// ================================================================================================
	//  UI
	// ================================================================================================
	return (
		<div className='CopyableText'>
			<HighlightedText padding='6px 12px' isBold={false} {...hightedTextProps}>
				{children}
			</HighlightedText>
			<CopyToClipboard text={children} onCopy={() => alert('copied')}>
				<Button>
					<IcCopy size='1.2rem' />
				</Button>
			</CopyToClipboard>

			{/* STYLE */}
			<style jsx>{`
				.CopyableText {
					display: flex;
					gap: 10px;
				}

				.CopyableText :global(button) {
					padding: 0;
					width: 35px;
					height: 35px;
					min-width: 0;
					padding-top: 5px;
				}
			`}</style>
		</div>
	);
};

// ================================================================================================
//  LINK TEXT
// ================================================================================================
export const LinkText = ({ href, children, ...textProps }) => {
	return (
		<Link href={href}>
			<a>
				<Text {...textProps}>{children} </Text>

				<style jsx>{`
					a:hover {
						text-decoration: underline;
					}
				`}</style>
			</a>
		</Link>
	);
};
