import React from 'react';
import Header from './LayoutComponents/Header';

/**
 * LAYOUT WRAPPER FOR ALL PAGES (EXCEPT LOGIN AND SIGN UP)
 */
const Layout = ({ children, user, route }) => {
	return (
		<div>
			<div id='portal'></div>
			<Header user={user} route={route} />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
