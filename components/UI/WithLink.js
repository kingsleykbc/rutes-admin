import React from 'react';
import Link from 'next/link';

const WithLink = ({ link, className, children }) =>
	link ? (
		<Link href={link}>
			<a className={className}>{children}</a>
		</Link>
	) : (
		children
	);

export default WithLink;
