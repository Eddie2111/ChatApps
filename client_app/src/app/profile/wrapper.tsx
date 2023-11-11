'use client';
// this component wraps the top and intro components and serve it to server side
import Axios from 'axios';
import React from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

import Top from './top';
import Intro from './intro';
import Session from '../session/api';

interface IIntroProps{
	result:
	{
		about: string;
		education: string[];
		workplaces: string[];
		contact: any;
	}
}

export default function Wrapper(): JSX.Element {
	const [id, setID] = React.useState<string>('');
	const [user, setUser] = React.useState({});
	const [intro, setIntro] = React.useState<IIntroProps>({});
	const [top, setTop] = React.useState({});
	const searchParams = useSearchParams();
	const search:string = searchParams.get('id')
	React.useEffect(() => {
		async function SessionHandle(): string {
			const response = await Session();
			setID(response);
			Axios.post('http://localhost:4200/profile/get', {id: search}, {withCredentials: true})
				.then((res) => {
					setUser(res.data);
					console.log('user data from back?',res.data.result)
					setIntro({
						about: res.data.result.about || ' ',
						education: res.data.result.education || [' '],
						workplaces: res.data.result.workplaces || [' '],
						contact: res.data.result.contact || [' '],
					})
					setTop({
						name: res.data.result.name || ' ',
						email: res.data.result.email || ' ',
						id: res.data.result.id || ' ',
					})
				})
				.catch((err) => {
					console.log(err);
				});
			return response;
		}
		SessionHandle();
	}, []);
	// console.log(id);
	return (
		<div>
			<Top data={top}/>
			<Intro data={intro} />
		</div>
	);
}
