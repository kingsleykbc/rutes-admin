import React from 'react';
import IndividualSessions from '../../../components/ViewProjectComponents/IndividualSessions';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const individualsessions = () => {
	return <ViewProjectLayout>{data => <IndividualSessions data={data} />}</ViewProjectLayout>;
};

export default individualsessions;
