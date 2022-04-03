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

export const annotations = [
	{
		route: '/',
		screenshot: 'https://jimmyrose.me/wp-content/uploads/2020/11/screen-shot-2020-11-16-at-1.53.29-pm-2--1.jpg',
		annotations: [
			{
				route: '/',
				point: { mouseX: 200, mouseY: 399 },
				message: 'This is the first message',
				timePosted: new Date(),
				testerName: 'John frank',
				sessionID: '#378463'
			},
			{
				route: '/',
				point: { mouseX: 500, mouseY: 123 },
				message: 'This is the second message',
				timePosted: new Date(),
				testerName: 'Jason Vorhees',
				sessionID: '#378463'
			},
			{
				route: '/',
				point: { mouseX: 100, mouseY: 39 },
				message: 'This is the third susan message',
				timePosted: new Date(),
				testerName: 'Susan collins frank',
				sessionID: '#378463'
			}
		]
	},
	{
		route: '/contact',
		screenshot: 'https://www.blogtyrant.com/wp-content/uploads/2019/12/grammarly-contact-page-wide.png',
		annotations: [
			{
				route: '/',
				point: { mouseX: 120, mouseY: 283 },
				message: 'The contact page needs some work',
				timePosted: new Date(),
				testerName: 'Susan collins frank',
				sessionID: '#378463'
			}
		]
	}
];

export const feedback = [
	{
		route: '/',
		feedback: [
			{
				id: '1',
				title: 'Microscope note title',
				type: 'feature request',
				message: 'Can we add a microscope',
				route: '/',
				testerName: 'susan',
				timePosted: new Date()
			},
			{
				id: '1pisd',
				title: 'Tracker title',
				type: 'feature request',
				message: 'Have a tracker',
				route: '/',
				testerName: 'John',
				timePosted: new Date()
			},
			{
				id: '1ewe',
				title: 'The searchbar',
				type: 'error',
				message: 'Searchbar not working',
				route: '/',
				testerName: 'John',
				timePosted: new Date()
			},
			{
				id: '1923',
				title: 'Button title',
				type: 'note',
				message: 'The button is red',
				route: '/',
				testerName: 'Frank',
				timePosted: new Date()
			}
		]
	}
];

export const preQuestionnaireResponse = [];

export const postQuestionnaireResponse = [];

export const response = {
	annotations,
	feedback,
	preQuestionnaire: preQuestionnaireResponse,
	postQuestionnaire: postQuestionnaireResponse
};
