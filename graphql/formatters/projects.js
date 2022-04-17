export const getProjectsFormatter = ({ projects }) => {
	return projects.map(item => ({ ...item, noParticipants: item.sessions.length }));
};

export const sessionFeedbacksFormatter = (sessions, view) => {
	const result = [];

	sessions.forEach(item => {
		item.response.feedback.forEach(val => {
			if (
				view === 'All' ||
				(view === 'Notes' && val.type === 'note') ||
				(view === 'Error updates' && val.type === 'error') ||
				(view === 'Feature requests' && val.type === 'feature request')
			)
				result.push({ ...val, testerEmail: item.testerEmail });
		});
	});

	return result;
};

/**
 * HANDLE COMPILING ANSWERS
 */
const getAnswers = (questionID, type, options, sessions, view) => {
	let questionAnswers = [];
	if (type === 'multi-choice') {
		questionAnswers = {};
		options.forEach(option => {
			questionAnswers[option] = 0;
		});
	}
	let totalQuestionAnswers = 0;

	sessions.forEach(({ testerEmail, response }) => {
		const answers = view === 'Pre-session' ? response.preQuestionnaireResponse : response.postQuestionnaireResponse;
		answers.forEach(answer => {
			if (answer.questionID === questionID) {
				if (type === 'multi-choice') {
					questionAnswers[answer.answer]++;
					totalQuestionAnswers++;
				} else {
					questionAnswers.push({ ...answer, testerEmail });
				}
			}
		});
	});

	// Get percentages (for multi choice questions)
	if (totalQuestionAnswers > 0)
		Object.keys(questionAnswers).forEach(option => {
			questionAnswers[option] = (questionAnswers[option] / totalQuestionAnswers) * 100;
		});

	return questionAnswers;
};

export const questionnaireResponseFormatter = (data, view) => {
	// 'Pre-session'
	const result = [];
	const { sessions, preQuestionnaire, postQuestionnaire } = data;
	const questions = view === 'Pre-session' ? preQuestionnaire : postQuestionnaire;

	questions.forEach(item => {
		let questionData = { ...item };
		questionData.answers = getAnswers(item.id, item.type, item.options, sessions, view);
		result.push(questionData);
	});

	return result;
};
