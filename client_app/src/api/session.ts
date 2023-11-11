'use server';
import {cookies} from 'next/headers';
import jwt from 'jsonwebtoken';

export default async function handler(): Promise<string> {
	const cookieStore = cookies();
	// const time:number = 6 * 60 * 60; /* * 24 * 7 * 1000;*/
	// const cookieAttribute = {path: '/', expires: new Date(Date.now() + time)};
	try {
		const token = cookieStore.get('token') as {id: string, name: string; value: string; path: string} || {id: ' ', name: ' ', value: ' ', path: ''};
		const valueSet = jwt.verify(token.value, process.env.JWT_SECRET || 'secret') as {id: string, name: string};
		// cookieStore.set('id',valueSet.id, cookieAttribute);
		return valueSet.id;
	} catch (err) {
		return ' ';
	}
}
