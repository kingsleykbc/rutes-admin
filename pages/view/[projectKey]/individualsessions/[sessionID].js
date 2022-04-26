import React from 'react';
import SessionResult from '../../../../components/ViewProjectComponents/SessionResult';
import ViewProjectLayout from '../../../../components/ViewProjectLayout';

const result = () => {
	return <ViewProjectLayout>{data => <SessionResult data={data} />}</ViewProjectLayout>;
};

export default result;
