'use server';
import {cookies} from 'next/headers';
import jwt from 'jsonwebtoken';

export default async function handler(): string {
	const cookieStore = cookies();
	// const time:number = 6 * 60 * 60; /* * 24 * 7 * 1000;*/
	// const cookieAttribute = {path: '/', expires: new Date(Date.now() + time)};
	try {
		const token = cookieStore.get('token');
		const valueSet = jwt.verify(token.value, process.env.JWT_SECRET);
		// cookieStore.set('id',valueSet.id, cookieAttribute);
		return valueSet.id;
	} catch (err) {
		return '';
	}
}
