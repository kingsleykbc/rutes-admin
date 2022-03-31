import Layout from '../components/Layout';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';

/**
 * SETUP N-PROGRESS LOADER
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 * APP
 */
function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<title>RUTES ADMIN</title>
			</Head>

			{/* DON'T SHOW LAYOUT FOR THE AUTHENTICATION PAGES */}
			{['/signup', '/login', '/admin-login'].includes(router.route) ? (
				<Component route={router.route} {...pageProps} />
			) : (
				<Layout route={router.route}>
					<Component route={router.route} {...pageProps} />
				</Layout>
			)}

			{/* STYLE */}
			<style jsx global>{`
				#nprogress .bar {
					background: var(--primaryColor) !important;
					border-color: var(--primaryColor) !important;
				}

				#nprogress .spinner {
					display: none;
				}
			`}</style>
		</>
	);
}

export default MyApp;
