export const user = {
	fullName: 'John Doe',
	email: 'john@email.com',
	password: 'password'
};

export const projects = [
	{
		_id: '4398D3B45Ui334hd',
		title: 'E-parking website',
		description: 'An e-parking solution for handling automatic parking lot allocation',
		tests: [
			{
				route: '/',
				totalRoute: 'https://example.com',
				instructions: ['Scroll around the screen', 'Look for issues', 'interact with the buttons']
			},
			{
				route: '/login',
				totalRoute: 'https://example.com/login',
				instructions: ['Sign up with fake credentials', 'Sign up with real credentials']
			}
		],
		preQuestionnaire: [
			{ type: 'text', question: 'What is the biggest challenge you face with existing systems?' },
			{ type: 'multi-choice', question: 'How often do you use similar systems?', options: ['very often', 'rarely', 'not at all'] }
		],
		postQuestionnaire: [
			{ type: 'text', question: 'What else would you like to see in the system?' },
			{
				type: 'multi-choice',
				question: 'How good was the interaction with UI elements?',
				options: ['Very good', 'good', 'Poor', 'Very poor']
			}
		],
		noParticipants: 8,
		projectKey: 'ABCD1484',
		url: 'https://example.com',
		datePosted: new Date()
	},
	{
		_id: '49843ID372',
		title: 'Landing Page',
		description: 'A landing page for a fashion design firm.',
		tests: [
			{
				route: '/',
				totalRoute: 'https://landingpage.com',
				instructions: ['Scroll around the screen', 'Sign up for mailing list']
			}
		],
		postQuestionnaire: [{ type: 'text', question: 'What is the biggest challenge you face with existing systems?' }],
		noParticipants: 15,
		projectKey: '387DNS',
		url: 'https://landingpage.com',
		datePosted: new Date()
	},
	{
		_id: '4398DOERNUDSN34',
		title: 'UOL Student Library',
		description: 'The university of leicester online student library',
		tests: [
			{
				route: '/',
				totalRoute: 'https://leicesterlibrary.com',
				instructions: ['Search for a book', 'Scroll around the screen', 'Used advanced search feature']
			},
			{
				route: '/download',
				totalRoute: 'https://leicesterlibrary.com/download',
				instructions: ['Download book', 'Write a review', 'Copy the citation text']
			}
		],
		noParticipants: 12,
		projectKey: '387DNS',
		url: 'https://leicesterlibrary.com',
		datePosted: new Date()
	}
];
