import Layout from '../components/Layout';
import '../styles/globals.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import AuthContext, { AuthContextProvider } from '../contexts/AuthContext';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import SearchContextProvider from '../contexts/SearchContext';

/**
 * SETUP N-PROGRESS LOADER (LOADING BAR THAT APPEARS AT THE TOP OF THE SCREEN)
 */
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

/**
 * APP
 */
function MyApp({ Component, pageProps, router }) {
	return (
		<ApolloProvider client={apolloClient}>
			<SearchContextProvider>
				<AuthContextProvider>
					<AuthContext.Consumer>
						{/* DON'T SHOW LAYOUT FOR THE AUTHENTICATION PAGES */}
						{({ user }) => (
							<>
								<Head>
									<title>RUTES ADMIN</title>
								</Head>
								{['/signup', '/login', '/admin-login'].includes(router.route) ? (
									<Component route={router.route} {...pageProps} />
								) : (
									user && (
										<Layout user={user} route={router.route}>
											<Component route={router.route} {...pageProps} />
										</Layout>
									)
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
						)}
					</AuthContext.Consumer>
				</AuthContextProvider>
			</SearchContextProvider>
		</ApolloProvider>
	);
}

export default MyApp;
