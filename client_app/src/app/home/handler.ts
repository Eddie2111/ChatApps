'use server';
import {cookies} from 'next/headers';
interface Token {
  name?: string;
  value?: string;
}
export default async function handler() {
	const cookieStore = cookies();
	const token: Token = cookieStore.get('token') || {name: '', value: ''};
	return token.value || '';
}
