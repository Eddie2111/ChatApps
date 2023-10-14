'use server';
import {cookies} from 'next/headers';
import jsonwebtoken from 'jsonwebtoken';
interface IOutput {
  name: string;
  email: string;
}

async function GetData(): IOutput {
  const cookie = cookies();
  console.log(cookie);
  const token = cookie.get('token') || '';
  const jwt = jsonwebtoken.decode(token.value || '');
  console.log(jwt);
  const serial = cookie.get('id') || '';
  const name = cookie.get('name') || '';
  const email = cookie.get('email') || '';
  return {
    serial: serial.value || '',
    name: name.value || '',
    email: email.value || '',
  };
}

export default GetData;
