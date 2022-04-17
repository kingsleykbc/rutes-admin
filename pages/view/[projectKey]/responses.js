import React from 'react';
import QuestionnaireResponses from '../../../components/ViewProjectComponents/QuestionnaireResponses';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const Responses = () => {
	return <ViewProjectLayout>{data => <QuestionnaireResponses data={data} />}</ViewProjectLayout>;
};

export default Responses;
