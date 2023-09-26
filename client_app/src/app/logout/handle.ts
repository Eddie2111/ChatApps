'use server';
import axios from 'axios';

export default async function logout() {
  const response = await axios.get('http://localhost:3100/signout',
    { withCredentials: true }
  );
  return response.data;
}