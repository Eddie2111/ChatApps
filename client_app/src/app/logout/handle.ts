'use server';
import axios from 'axios';
import {cookies} from 'next/headers';

export default async function logout() {
  const response = await axios.get('http://localhost:3100/signout', {withCredentials: true});
  cookies().delete('token');
  console.log(cookies().get('token'));
  return response.data;
}
