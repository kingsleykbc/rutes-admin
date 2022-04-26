import React from 'react';
import Chat from '../../../components/ViewProjectComponents/Chat';
import ViewProjectLayout from '../../../components/ViewProjectLayout';

const chat = () => {
	return <ViewProjectLayout>{data => <Chat data={data} />}</ViewProjectLayout>;
};

export default chat;
