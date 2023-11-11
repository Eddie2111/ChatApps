'use client';
import React from 'react';
import {CreateCard, WelcomePoster} from '@/components/Forms/CreatePosts';

import Session from '../session/api';

export default function Banner(): JSX.Element {
	// const [id, setID] = React.useState<string>('');
	const [token, setToken] = React.useState<string | null>(null);
	React.useEffect(() => {
		(async () => {
			const response = await Session();
			setToken(response.id);
		})();
	}, []);
	return <center>{token ? <CreateCard /> : <WelcomePoster />}</center>;
}
