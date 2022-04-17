import React from 'react';
import Feedback from '../../../components/ViewProjectComponents/Feedback';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const feedback = () => {
	return <ViewProjectLayout>{data => <Feedback data={data} />}</ViewProjectLayout>;
};

export default feedback;
