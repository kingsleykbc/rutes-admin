import React from 'react';
import Header from './LayoutComponents/Header';

/**
 * LAYOUT WRAPPER FOR ALL PAGES (EXCEPT LOGIN AND SIGN UP)
 */
const Layout = ({ children, user }) => {
	return (
		<div>
			<div id='portal'></div>
			<Header user={user} />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
