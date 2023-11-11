'use server';
import axios from 'axios';
import {cookies} from 'next/headers';
import jsonwebtoken from 'jsonwebtoken';
// interface IOutput {
//   name: string;
//   email: string;
// }
export default async function Handler() {
	const cookie = cookies();
	const name: string = cookie.get('name') || '';
	const email: string = cookie.get('email') || '';
	const token = cookie.get('token') || '';
	console.log(name, email, token);
	const jwt = jsonwebtoken.decode(token.value || '');
	const data = await axios.post('http://localhost:4200/profile/get', {id: jwt.id});
	console.log(data);
	return token;
}
